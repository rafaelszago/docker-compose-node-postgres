# Docker Compose for Node.js + Postgres

Simple Docker Compose settings for Node.js + Postgres

## Required

1. Docker
2. Docker Compose

## Configuration

Define your target:

```yml
target: development
```

Define your enviroment:

```yml
NODE_ENV: development
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
docker-compose up
```
