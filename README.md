# Node Express Passport.js Github Example


### Set up postgres

1. heroku addons:create heroku-postgresql:hobby-dev
2. heroku config
3. Copy the POSTGRES_URL to .env file
4. Connect to db and import the users table in db.sql file


## Set up Github Application

1. Create or use existing github app from developer portal https://github.com/settings/applications/new
2. Copy app id and secret to environment variables
  i. Put env variables in .env file
  ii. Set up deployment (heroku in this example) env variables
3. Set up redirect urls in the app in GithubStrategy object config
4. Add the callback urls to github app's whitelisted redirect urls


### Env File

You need to create and place all configuration about your database, github app details in .env file or in your target platform's environment variables. The env file or variables listed below:

```
DATABASE_URL=postgres://...
GITHUB_CLIENT_ID=9d024....
GITHUB_CLIENT_SECRET=082fd...
GITHUB_CALLBACK_URL=https://...
```

### Run

1. npm install
2. node index.js


### Deploy on heroku

1. git init
2. heroku login
3. heroku create
4. git push heroku master
