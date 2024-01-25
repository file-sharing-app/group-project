# Shared For Care API Documentation

## Models

### User

```txt
- email : string, required, unique
- name : string, required
- password : string, required
```

## Endpoints

List of available endpoints:

- `POST /register`
- `POST /login`

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```