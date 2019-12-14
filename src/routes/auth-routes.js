const router = require('express').Router();
const passport = require('passport');

/**********************
 *   Routes
 **********************/

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }, () => console.log('call auth', arguments)));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }, () => console.log('user', arguments)),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/?token=whatever');
});

module.exports = router;
