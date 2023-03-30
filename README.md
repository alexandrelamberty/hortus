# Hortus

Hortus is a gardening planner application that helps you manage your seeds, create cultures, and visualize your garden, plants, and pots. It also provides alerts and notifications to keep track of your garden.

## Features

- Web GUI for managing your garden
- Manage collection of seeds with detailed information, including name, type, and germination rate
- Create cultures for seeds with seeding, planting, and harvesting phases
- Create and visualize your gardening spaces, plants, and pots in a visual environment
- Receive alerts and notifications for tasks such as watering, fertilizing, and harvesting

## Technologies, languages, frameworks

- [Docker](https://www.docker.com/) : containerization platform
- [NPM](https://www.npmjs.com/) : package manager for JavaScript
- [NodeJS](https://nodejs.org/) : JavaScript runtime
- [MongoDB](https://www.mongodb.com/) : NoSQL database
- [Redis](https://redis.io/) : in-memory data structure store
- [Typescript](https://www.typescriptlang.org/) : typed superset of JavaScript
- [React](https://reactjs.org/) : JavaScript library for building user interfaces
- [NestJS](https://nestjs.com/) : framework for building efficient, scalable Node.js server-side applications
- [Semantic UI React](https://react.semantic-ui.com/) : React components for the Semantic UI design system
- [TailwindCSS](https://www.typescriptlang.org/) : utility-first CSS framework

## Requirements

- [Docker](https://www.docker.com/) : version 18.06 or higher

## Usage

### Prerequisites

- Clone the repository and create a file named .env at the root of the project
- Add the environment variables to the .env file

```properties
# Database (MongoDB)
DATABASE_HOST=database
DATABASE_MAP_PORT=27017
DATABASE_NAME=hortus
DATABASE_USERNAME=hortus
DATABASE_PASSWORD=hortus
DATABASE_ROOT_USER=root
DATABASE_ROOT_PASSWORD=root
# Cache (Redis)
CACHE_HOST=cache
CACHE_PORT=6379
CACHE_TTL=300
# Session (Redis)
SESSION_HOST=session
SESSION_PORT=6380
SESSION_TTL=300
# Web app
WEB_APP_IMAGE_TAG=develop
WEB_APP_ENV=prod
WEB_APP_PORT=3000
WEB_APP_KEY=aaddddawrfffvvvvssaa
WEB_APP_API_URL=http://api.hortus.lan
# API
API_IMAGE_TAG=test
API_NODE_ENV=development
API_PORT=3333
API_PAIRING_KEY=9fca54477c8ad4e70dc5e1084f884aad
API_JWT_SECRET=d7a481461577ba4c3c4c6946cca7204b
API_JWT_EXPIRE=90
API_BCRYPT_HASH=7f91317e30a02bc7b87205e95b842df2
API_DATABASE_URI=mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:27017/hortus
API_STATIC_DIR=/upload
API_UPLOAD_PATH=/upload
# Redis commands
REDIS_COMMANDER_PORT=8082
# Mongo express
MONGO_EXPRESS_PORT=8081
```

### Running the application with Docker

1. Start the stack in detached mode

```bash
docker compose --env-file .env up -d
```

### Running the application with Portainer

1. Create a stack from this repository

2. Add the environment variables

### Accessing the application

The web application is accessible at <http://hortus.lan> and the API at <http://api.hortus.lan>.

## Development

### Architecture / Infrastructure

The system follow a client/server architecture, running as a
[Docker](https://www.docker.com/) stack.

Clone the repository and update the submodules:

- hortus-api
- hortus-web-app

The project also have a [hortus-api-spec]() and a [hortus-design-guidelines]() submodules not needed for development purpose.

The main project contains the application infrastructure as Docker services. see: `docker-compose.yml`

The main infrastructure of the application is composed of

- An HTTP Proxy service to handle requests to the web client and the API
- A MongoDB database service
- A Redis cache service
- A Redis session store service
- The API service, built with NestJS
- The web client service, built with React

The stack is composed of 5 services. see: `docker-compose.yml`

- API

  [NestJS](https://nestjs.com/) application that implement the [Hortus API Specification](https://github.com/alexandrelamberty/hortus-api-spec).

  GitHub:  [hortus-api](https://github.com/alexandrelamberty/hortus-server)

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

When starting the stack Docker will look for a local version of the API and Web App service, if non are present it will download them from DockerHub.

To use local builds, go respectively to the [hortus-api]() and [hortus-web-app]() submodules and read the documentation on how to build the local images.

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
