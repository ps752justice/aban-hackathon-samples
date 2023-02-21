FROM golang:1.19.3-alpine AS build

ENV GO111MODULE=on

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o hackaton-api

FROM scratch

WORKDIR /app

COPY --from=build /app/hackaton-api .

EXPOSE 8082

ENTRYPOINT ["/app/hackaton-api"]