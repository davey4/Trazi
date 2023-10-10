# Trazi

## Tech Used

- Node
- MongoDB
- Mongoose
- Express

## Prerequisites

- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

## Getting started

- `git clone git@github.com:davey4/Trazi.git`
- `npm install`
- `npm run seed-data`
- `npm start`
  - alternatively for running with nodemon you can `npm run dev`

## Examples of usage

- GET

```bash
curl -X GET http://localhost:5555/api/population/state/Florida/city/Orlando

200 {"population":309154}
```

```bash
curl -X GET http://localhost:5555/api/population/state/Florida/city/Brandon

400 "Couldn't find population for Brandon, Florida"
```

- PUT

```bash
curl -X PUT -d '309500' http://localhost:5555/api/population/state/Florida/city/Orlando`

200
```

```bash
curl -X PUT -d '115909' http://localhost:5555/api/population/state/Florida/city/Brandon`

201
```

```bash
curl -X PUT -d http://localhost:5555/api/population/state/Florida/city/Orlando`

400 "Population is a required field to perform this operation. Please provide a body with plain text that contains just the population number."
```

---

There were a couple of bad data points in the csv for example

`,Pennsylvania,1794`

`South Ottawaship,Illinois,s`

I opted to filter those out when seeding but alternatively you could make them not required and the population data-type a `String`
