# Hortus

Hortus is a personal gardening planner application.

## Features

- [ ] Web GUI
- [ ] Manage collection of seeds with detailed informations
- [ ] Create culture of seed with the different; seeding,
planting, harvesting.
- [ ] Create your gardening spaces, plants and pots in a visual environment.
- [ ] Alerts & Notifications]

## Technologies, languages, frameworks

- [Docker](https://www.docker.com/)
- [NPM](https://www.npmjs.com/)
- [NodeJS](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [NestJS](https://nestjs.com/)
- [Semantic UI React](https://react.semantic-ui.com/)
- [TailwindCSS](https://www.typescriptlang.org/)

## Requirements

- [Docker](https://www.docker.com/)

## Usage

This application rely on some environment variables:

```properties
# Web client
REACT_APP_NODE_ENV=dev
REACT_APP_API_URL=http://127.0.0.1:333
# API
NODE_ENV=dev
API_URL=localhost
API_PORT=3333
# Database (MongoDB)
DATABASE_ROOT_USER=root
DATABASE_ROOT_PASSWORD=root
DATABASE_HOST=localhost
DATABASE_PORT=27017
DATABASE_NAME=hortus
DATABASE_USERNAME=hortus
DATABASE_PASSWORD=hortus
DATABASE_URI=mongodb://hortus:hortus@hortus-database:27017/hortus
# Cache (Redis)
CACHE_HOST=hortus-cache
CACHE_PORT=6379
CACHE_TTL=300
# Session (Redis)
SESSION_HOST=hortus-session
SESSION_PORT=6380
SESSION_TTL=300
# Authentication
JWT_SECRET=123456
JWT_EXPIRE=123456
BCRYPT_HASH=12345
# File upload
STATIC_DIR=/upload
UPLOAD_PATH=/upload
```

### Run with Docker

Clone the repository and create a file name `.env` at the root of the project.

Add the environment variables

Start the stack in detached mode

```bash
docker compose --env-file .env up -d
```

### Run with Portainer

- Create a stack from this repository
- Add the environment variables

### Launching

The web application is accessible at <http://hortus.lan> and the API at
<http://api.hortus.lan>.

## Development

### Architecture / Infrastructure

The system follow a client/server architecture, running as a
[Docker](https://www.docker.com/) stack.

Clone the repository and update the submodules:

- hortus-api-spec
- hortus-api
- hortus-web-app

the main project contains the application infrastructure as Docker services. see: `docker-compose.yml`

The main infrastructure of the application is composed of

- An HTTP Proxy service to handle request to the web client and the API

- A MongoDB database service

- A Redis cache service

The stack is composed of 5 services. see: `docker-compose.yml`

- API

  [NestJS](https://nestjs.com/) application that implement the [Hortus API Specification](https://github.com/alexandrelamberty/hortus-api-spec).

  GitHub:  [hortus-server](https://github.com/alexandrelamberty/hortus-server)

  DockerHub: [hortus-api:latest](https://hub.docker.com/r/alexandrelamberty/hortus-api)

- Web application
  
  [React](https://reactjs.org/) application written in [Typescript](https://www.typescriptlang.org/) and using
  [React Semantic UI](https://react.semantic-ui.com/) and [TailwindCSS](https://tailwindcss.com/).

  GitHub: [hortus-web-app](https://github.com/alexandrelamberty/hortus-web-app)

  DockerHub: [hortus-web-app:latest](https://hub.docker.com/r/alexandrelamberty/hortus-web-app)

- Proxy
  
  An [Nginx](https://www.nginx.com/) reverse proxy to serve the client and API.

- Database
  
  A non-relational document database, [MongoDB](https://hub.docker.com/_/mongo).

- Cache

  A cache for the the API requests, [Redis](https://hub.docker.com/_/redis).

### API

To work on the API start the database and cache services:

```bash
docker compose --env-file .env up -d database cache
```

then check the development section of the API project.

### Web application

To work on the web application start the API service:

```bash
docker compose --env-file .env up -d api
```
