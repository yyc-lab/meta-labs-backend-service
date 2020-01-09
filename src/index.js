"use strict";

const PORT          = 3030;
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieParser  = require('cookie-parser');
const morgan        = require("morgan");
const app           = express();
const datahelpers   = require('./DataHelpers/data-helpers');
const passport      = require('passport');
const passportSetup = require('./config/passport-setup')(datahelpers.user_helpers);
const jwt = require('jsonwebtoken');

const cors          = require('cors');
const authRoutes    = require('./routes/auth-routes');
const usersRoutes   = require('./routes/user');
require('dotenv').config();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

function middleware(req, res, next){
  let user
  if(req.headers['authorization']){
    user = jwt.verify(req.headers['authorization'], 'your_jwt_secret');
    req.user = user
  }
  if(user == null){
    res.send("unauthorized")
  }
  next()
}

const projectRoutes = require("./routes/projects.js")(datahelpers);
app.use("/projects", projectRoutes);
app.use(middleware)
app.use('/user', usersRoutes);
const server = app.listen(process.env.PORT || PORT, () => {

  console.log("Example app listening on port " + (process.env.PORT || PORT));

});

// it is used by Mocha
module.exports = server;
