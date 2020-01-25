require('dotenv').config();
const PORT          = process.env.PORT || 3030;
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
const projectRoutes = require("./routes/projects.js")(datahelpers);

// TODO: move this function from this file?
function middleware(req, res, next) {
  let user;

  if (req.headers["authorization"]) {
    const header = req.headers["authorization"].replace(/Bearer\s+/i, "")
    user = jwt.verify(header, process.env.JWT_SECRET);

    req.user = user;
  }
  if (user == null) {
    res.status(400).json({ error: "Unauthorized" });
    return
  }
  next();
}
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use("/projects", projectRoutes);
app.use(middleware)
app.use('/user', usersRoutes);


const server = app.listen(process.env.PORT || PORT, () => {

  console.log("Example app listening on port " + (process.env.PORT || PORT));

});

// it is used by Mocha
module.exports = server;
