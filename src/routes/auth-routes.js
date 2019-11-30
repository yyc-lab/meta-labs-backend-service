const router = require('express').Router();
const passport = require('passport');

/**********************
 *   Routes
 **********************/

router.get('/',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('successful login')
    res.send('welcome here traveller');
});

module.exports = router;
