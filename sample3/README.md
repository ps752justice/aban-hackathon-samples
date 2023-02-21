# hackathon

## Demo

The live demo can be accessed from [this](http://ec2-18-218-179-110.us-east-2.compute.amazonaws.com) link. To read more about the project please click [here](http://ec2-18-218-179-110.us-east-2.compute.amazonaws.com/about)


# Frontend

## Executing the source code locally

```bash
cd hackathon-ui
npm start
```

if you would like to hit the local backend api, you need to update the `apiUrl` of `dev`object in the config file to `http://localhost:8082`. Otherwise it will hit the production API server.

## Running the docker image locally

```bash
docker run --rm -it -p 8082:8082 ir1401/hackathon-ui
```

Visit http://localhost:8082

# Backend

## Executing the source code locally

Install the latest version of [Go SDK](https://go.dev/dl/) for your platform.

```bash
export DB_CONNECTION='username:password@tcp(host:port)/hackathon?charset=utf8mb4,utf8'
cd hackathon-api
go run *.go
```


## Running the docker image locally

```bash
export DB_CONNECTION='username:password@tcp(host:port)/hackathon?charset=utf8mb4,utf8'
docker run --rm -it -e DB_CONNECTION=$DB_CONNECTION -p 8080:8082 ir1401/hackathon-api
```

# Use docker-compose

```bash
export DB_CONNECTION='username:password@tcp(host:port)/hackathon?charset=utf8mb4,utf8'
cd hackathon
docker-compose up
```

Visit http://localhost:8082

## Database

If you wish to run the backend locally, you'd need to create a Mysql database and run the queries under `hackathon-api > sql` folder.
