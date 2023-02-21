package data

type Person struct {
	ID         int    `json:"id"`
	FullName   string `json:"full_name"`
	Age        string `json:"age"`
	Date       string `json:"date"`
	Location   string `json:"province"`
	ProvinceID int    `json:"province_id"`
	City       string `json:"city"`
	Cause      string `json:"cause"`
	ThumbURL   string `json:"thumb_url"`
	ImageURL   string `json:"image_url"`
}
