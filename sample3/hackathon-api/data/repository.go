package data

import "context"

type PeopleRepository interface {
	Fetch(ctx context.Context, event Event, lang Language, searchTerm string) ([]Person, []ProvinceRecord, error)
}
