const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config(); 

let dataHelpers = null;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => 
  {
    dataHelpers.getUserById(id, (user) => done(null, user))
  } 
);

setUpLinkedinPassport = function (){
passport.use(
  new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://beeeee.herokuapp.com/auth/github"
  },
  function(accessToken, refreshToken, profile, done) {
    /*User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    }); */
    console.log('authenticated', profile)
    done(null, profile.login)
  }
))
}

module.exports = setUpLinkedinPassport;