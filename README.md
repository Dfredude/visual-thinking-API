# Visual Partnership API

## Get started

Run to install dependencies 
```bash
npm install
```

Run to start the server
```bash
npm start
```

## Endpoints

`localhost:3000/api/v1/students`
Returns all students

`/api/v1/students/certified`
Returns all certified students

`/api/v1/students/good`
Returns all students with more than 500 credits

## Dependencies

### Development

- Jest
- Eslint

### Production

- Express

## Components

### Reader

> Utility to read JSON Files

### Students Service

> Fetches the data and produces the logical result

### Students Controller

> Produces the business output using