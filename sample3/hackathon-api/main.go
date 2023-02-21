package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"hackathon-api/data"
)

const port = 8082

func main() {

	srv := echo.New()
	srv.Use(middleware.Logger())
	srv.Use(middleware.Recover())

	srv.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
	}))

	repo, err := data.NewMySQLRepository()
	if err != nil {
		panic(err)
	}

	srv.GET("/ping", ping)
	srv.GET("/people/:event/:lang", getPeople(repo))

	if err := srv.Start(fmt.Sprintf(":%d", port)); err != http.ErrServerClosed {
		log.Fatal(err)
	}
}
