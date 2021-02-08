# Docker Compose for Node.js + Postgres

Simple Docker Compose settings for Node.js + Postgres

## Usage

1- Create `api` folder at root directory.

2- Define your build target:

```yml
target: development
```

3- Define your enviroment:

```yml
NODE_ENV: development
```

4- Set your postgres env:

```yml
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
POSTGRES_DB: sampledb
```

5- Run:

```bash
docker-compose up --build
```
