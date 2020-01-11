# meta-labs-backend-service
Backend logic for building our app to build more apps

## getting started
local
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