# Docker Compose for Node.js + Postgres

Simple Docker Compose settings for Node.js + Postgres

## Required

1. Docker
2. Docker Compose

## Configuration

Define your target (production or development):

```yml
target: development
```

Set your postgres env:

```yml
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
POSTGRES_DB: sampledb
```

## Usage

Just run:

```bash
docker-compose up --build
```
