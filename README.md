# meta-labs-backend-service
Backend logic for building our app to build more apps

## suggested dev tooling
- Docker - installation instructions `https://docs.docker.com/v17.09/engine/installation/`
- Docker Compose - installation instructions `https://docs.docker.com/compose/install/`

## getting started
### Developing locally
This project uses docker & docker-compose while developing to automate the dev setup process
- clone repo: `git clone https://github.com/yyc-lab/meta-labs-backend-service.git`
- copy .env-example to .env, replace values
- run the server using `docker-compose up`
- run the migrations using `docker-compose run --rm server npm run dbmigrate`
- (Optional) run `source bashhelpers.sh` to get some useful aliases

### Deploying to Heroku
To keep configuration simple, we do not use docker while deploying
- login heroku
- click create new app
- select Github as deployment method
- select repo: meta-labs-backend-service (you might have to fork https://github.com/yyc-lab/meta-labs-backend-service)
- hit deploy
- heroku rigth top of page => `page` => `run terminal` => `run --app beeeee <AppName> (cd server && npm run dbmigrate)`
  or install Heroku ClI and run from local terminal `heroku run --app beeeee (cd server && npm run dbmigrate)`

Can push
