"use strict";

const PORT          = 3030;
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieSession = require('cookie-session');
const cookieParser  = require('cookie-parser');
const morgan        = require("morgan");
const app           = express();
const datahelpers   = require('./DataHelpers/data-helpers');
const passport      = require('passport');
const passportSetup = require('./config/passport-setup')(datahelpers.user_helpers);
const passportJWT = require('./config/passport-jwt')(datahelpers.user_helpers);

const cors          = require('cors');
const authRoutes    = require('./routes/auth-routes');
const usersRoutes          = require('./routes/user');
require('dotenv').config();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // <--- Here
app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

const projectRoutes = require("./routes/projects.js")(datahelpers);
app.use("/projects", projectRoutes);
app.use('/user', passport.authenticate('jwt', {session: false}), usersRoutes);
const server = app.listen(process.env.PORT || PORT, () => {

  console.log("Example app listening on port " + (process.env.PORT || PORT));

});

// it is used by Mocha
module.exports = server;