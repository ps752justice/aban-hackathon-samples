package main

import (
	"fmt"
	"net/http"
	"strings"

	"hackathon-api/data"

	"github.com/labstack/echo/v4"
)

func getPeople(repository data.PeopleRepository) echo.HandlerFunc {

	type response struct {
		People          []data.Person         `json:"people"`
		ProvinceRecords []data.ProvinceRecord `json:"provinceRecords"`
	}

	return func(c echo.Context) error {
		lang, err := data.ParseLanguage(c.Param("lang"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, errorJSON(err))
		}
		event, err := data.ParseEvent(c.Param("event"))
		if err != nil {
			return c.JSON(http.StatusBadRequest, errorJSON(err))
		}

		search := strings.TrimSpace(c.QueryParam("search"))
		people, provinceRecords, err := repository.Fetch(c.Request().Context(), event, lang, search)
		if err != nil {
			fmt.Println("ERROR", err)
			return err
		}

		return c.JSON(http.StatusOK, response{
			People:          people,
			ProvinceRecords: provinceRecords,
		})
	}
}
