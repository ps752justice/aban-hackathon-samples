package main

func errorJSON(err error) interface{} {
	return struct {
		Message string `json:"message"`
	}{
		Message: err.Error(),
	}
}
