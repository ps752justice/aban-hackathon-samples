package data

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type MySQLRepository struct {
	connection string
}

func NewMySQLRepository() (*MySQLRepository, error) {
	connection := os.Getenv("DB_CONNECTION")

	if len(connection) == 0 {
		return nil, fmt.Errorf("DB_CONNECTION environment variable cannot be empty")
	}
	return &MySQLRepository{connection: connection}, nil
}

func (m *MySQLRepository) Fetch(ctx context.Context, event Event, lang Language, searchTerm string) ([]Person, []ProvinceRecord, error) {
	db, err := initConnection(m.connection)
	if err != nil {
		return nil, nil, err
	}
	defer func() {
		if err = db.Close(); err != nil {
			log.Printf("Failed to close MySQL connection: %s", err)
		}
	}()

	query := fmt.Sprintf(`SELECT p.id, p.full_name, p.age, p.location, p.province_id, p.date, p.thumb_url, p.image_url,c.%s AS cause
			FROM hackathon.people_%[1]s AS p 
			INNER JOIN hackathon.causes AS c on c.id = p.cause_id`, lang)
	var params []any
	if len(searchTerm) > 0 {
		searchTerm = "%" + searchTerm + "%"
		query += " WHERE p.full_name LIKE ? OR p.location LIKE ? AND p.event = ?;"
		params = append(params, searchTerm, searchTerm, event.Value())
	} else {
		query += " WHERE p.event = ?;"
		params = append(params, event.Value())
	}

	res, err := db.QueryContext(ctx, query, params...)
	if err != nil {
		return nil, nil, fmt.Errorf("Failed to query database: %w", err)
	}
	defer func() {
		if err = res.Close(); err != nil {
			log.Printf("Failed to close MySQL result set: %s", err)
		}
	}()

	people := make([]Person, 0)
	provinceAggregate := make(map[int]ProvinceRecord)
	for res.Next() {
		var person Person
		err = res.Scan(&person.ID, &person.FullName, &person.Age, &person.Location,
			&person.ProvinceID, &person.Date, &person.ThumbURL, &person.ImageURL, &person.Cause)

		if err != nil {
			return nil, nil, fmt.Errorf("Failed to recode the person record: %w", err)
		}

		people = append(people, person)

		if provinceRecord, ok := provinceAggregate[person.ProvinceID]; ok {
			provinceAggregate[person.ProvinceID] = ProvinceRecord{
				ProvinceId: person.ProvinceID,
				Province:   person.Location,
				Count:      provinceRecord.Count + 1,
			}
		} else {
			provinceAggregate[person.ProvinceID] = ProvinceRecord{
				ProvinceId: person.ProvinceID,
				Province:   person.Location,
				Count:      1,
			}
		}
	}
	provinces := make([]ProvinceRecord, 0, len(provinceAggregate))
	for _, provinceRecord := range provinceAggregate {
		provinces = append(provinces, provinceRecord)
	}
	return people, provinces, nil
}

func initConnection(connection string) (*sql.DB, error) {
	db, err := sql.Open("mysql", connection)
	if err != nil {
		return nil, fmt.Errorf("Failed to initiate database connection: %w", err)
	}
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)
	return db, nil
}
