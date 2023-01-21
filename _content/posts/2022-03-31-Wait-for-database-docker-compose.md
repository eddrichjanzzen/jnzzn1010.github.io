---
title: 'Wait for database to finish before running application in docker-compose'
layout: blog-specific
author: eddrichjanzzen
date: 2022-03-31
category: blog
tags:
  - tech
  - django
  - python
description: 'An article that describes a solution for raise conditions when running an application with a database in docker'
---

##### Application container runs before the database is ready

Recently, I've started building a new project with [Django](https://www.djangoproject.com/) in conjunction with docker. I am using `docker-compose` to manage two services namely, the django application and the database (postgresql). I ran into an issue where sometimes the django application container runs before the database is ready. This causes an error where the django application is unable to connect to the database as seen below:

```bash
kalender-api-web-1  |     connection = Database.connect(**conn_params)
kalender-api-web-1  |   File "/usr/local/lib/python3.8/site-packages/psycopg2/__init__.py", line 122, in connect
kalender-api-web-1  |     conn = _connect(dsn, connection_factory=connection_factory, **kwasync)
kalender-api-web-1  | django.db.utils.OperationalError: connection to server at "db" (172.29.0.2), port 5432 failed: FATAL:  the database system is starting up
kalender-api-web-1  |
kalender-api-db-1   | 2022-03-31 13:26:42.168 UTC [25] LOG:  database system was not properly shut down; automatic recovery in progress
kalender-api-db-1   | 2022-03-31 13:26:42.175 UTC [25] LOG:  redo starts at 0/17737E0
kalender-api-db-1   | 2022-03-31 13:26:42.175 UTC [25] LOG:  invalid record length at 0/1773818: wanted 24, got 0
kalender-api-db-1   | 2022-03-31 13:26:42.175 UTC [25] LOG:  redo done at 0/17737E0 system usage: CPU: user: 0.00 s, system: 0.00 s, elapsed: 0.00 s
kalender-api-db-1   | 2022-03-31 13:26:42.212 UTC [1] LOG:  database system is ready to accept connections

```

Although this issue happens intermittently, restarting docker-compose everytime this happens can get quite tedious especially if you're working on the application on a day to day basis. 🥵

So, is there anything we can do to tell the django application to wait for the database? 🤔

##### Solution

After some research, I found that `docker-compose` actually supports healthchecks. A healthcheck is essentially a way to validate if a service is running. We are able to check if a specific container is healthy given some condition. We achieve this by using `depends_on` in conjunction with `healthcheck` as follows:

```yaml
version: '3.9'

services:
  web:
    build: .
    volumes:
      - .:/code
    ports:
      - '8000:8000'
    depends_on:
      db:
        condition: service_healthy
    restart: always
  db:
    image: postgres
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - '5432:5432'
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready']
      interval: 10s
      timeout: 5s
      retries: 5
volumes:
  pgdata:
```

In the example above, the healthcheck property has a condition to check if the `service_healthy`. We are testing for the condition "pg_isready" and if the database is ready, that's the only time the django application container starts running.

I really hope this short article will be of help to anyone who encounters a similar issue. :smile: :thumbsup:

##### Sources:

- [https://stackoverflow.com/questions/31746182/docker-compose-wait-for-container-x-before-starting-y](https://stackoverflow.com/questions/31746182/docker-compose-wait-for-container-x-before-starting-y)
- [https://github.com/peter-evans/docker-compose-healthcheck](https://github.com/peter-evans/docker-compose-healthcheck)
