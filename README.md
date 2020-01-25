# meta-labs-backend-service
Backend logic for building our app to build more apps

## suggested dev tooling
- Docker - installation instructions `https://docs.docker.com/v17.09/engine/installation/`
- Docker Compose - installation instructions `https://docs.docker.com/compose/install/`

## getting started
### Developing locally
This project uses docker & docker-compose while developing to automate the dev setup process
- clone repo: `git clone https://github.com/yyc-lab/meta-labs-backend-service.git`
- npm install
- copy .env-example to .env, reaplace values
    - needs a local pq db
    - needs a GitHub app    => https://github.com/settings/applications/new
                             => Authorization callback URL has to end w '/auth/github/callback'
- knex migrate:latest
- npm start

heroku
- login to heroku
- click create new app
- select Github as deployment method
- select repo: meta-labs-backend-service (you might have to fork https://github.com/yyc-lab/meta-labs-backend-service)
- hit deploy
- heroku rigth top of page => `page` => `run terminal` => `knex migrate:latest`
  or install Heroku ClI and run from local terminal `heroku run --app metalabs knex migrate:latest`

Can push

## Extras

### Bash Helpers
Run `source bashhelpers.sh` to get some useful command line tools:
`dcb` == `docker-compose build` - builds your docker containers
`dcd` == `docker-compose down` - turns off containers and network
`dcrr` == `docker-compose run remove server` - for running a command within the server (e.g. `dcrr bash` or `dcrr npm start`)
`dcu` == `docker-compose up` - spins up docker environment

### PGWeb

When running the server with `docker-compose up` or `dcu`, a web interface is available into your database.
You can see it in the browser at `localhost:8081`.
