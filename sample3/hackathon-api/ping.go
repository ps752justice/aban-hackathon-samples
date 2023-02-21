package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func ping(c echo.Context) error {
	return c.JSON(http.StatusOK, "Pong")
}
