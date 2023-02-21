package data

import (
	"fmt"
	"strings"
)

type Language string

const (
	LanguageUnknown Language = "unknown"
	LanguageFA      Language = "fa"
	LanguageEN      Language = "en"
)

func ParseLanguage(value string) (Language, error) {
	lang := Language(strings.ToLower(value))
	switch lang {
	case LanguageEN, LanguageFA:
		return lang, nil
	default:
		return LanguageUnknown, fmt.Errorf("Invalid language: %s", value)
	}
}
