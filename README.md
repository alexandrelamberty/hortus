# Hortus

Hortus is a personal gardening planner application.

## Features

- [ ] Web GUI
- [ ] Manage collection of seeds with detailed informations
- [ ] Create culture of your seed with the different; seeding,
planting, harvesting.
- [ ] Create your gardening spaces, plants and pots in a visual environment.
- [ Alerts & Notifications]

## Architecture / Infrastructure

The system follow a client/server architecture, running as a
[Docker](https://www.docker.com/) stack with
[Portainer](https://www.portainer.io/) on a 
[Raspberry Pi4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/).

## API Specification

- Hortus API Specification 

  API specification following the [OpenAPI](https://www.openapis.org/) standard.

  [Hortus API Specification](https://github.com/alexandrelamberty/hortus-api-spec)

## Components

- Server API 

  API implementation in [Typescript](https://www.typescriptlang.org/) with [NestJS](https://nestjs.com/)

  [Hortus API](https://github.com/alexandrelamberty/hortus-server)

- Hortus Web App

  Web application in [Typescript](https://www.typescriptlang.org/) with [React](https://reactjs.org/), 
  [React Semantic UI](https://react.semantic-ui.com/) and [TailwindCSS](https://tailwindcss.com/)

  [Hortus Web Application](https://github.com/alexandrelamberty/hortus-web-app)

# Requirements

- [Docker](https://www.docker.com/)

## Usage

This application rely on some environment variables:

### Run with Docker

Create a file name `.env ` and add the environment variables, then use Docker
compose to build and start the stack in detached mode.

```bash
docker compose up --env-file .env up -d
```

### Run with Portainer

- Create a stack from this repository
- Add the environment variables

### Launching

The web application is accessible at <http://hortus.lan> and the API at
<http://api.hortus.lan>.

