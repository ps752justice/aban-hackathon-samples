package data

import (
	"fmt"
	"strings"
)

type Event string

const (
	EventUnknown Event = "unknown"
	EventNov19   Event = "ab98"
)

func (e Event) Value() int {
	switch e {
	case EventNov19:
		return 0
	default:
		return -1
	}
}

func ParseEvent(value string) (Event, error) {
	e := Event(strings.ToLower(value))
	switch e {
	case EventNov19:
		return e, nil
	default:
		return EventUnknown, fmt.Errorf("Invalid event: %s", value)
	}
}
