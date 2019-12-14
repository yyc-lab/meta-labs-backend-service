const router = require('express').Router();
const passport = require('passport');

/**********************
 *   Routes
 **********************/

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }, () => console.log('call auth', arguments)));

  /*
router.get('/github/callback', function(req, res, next) {
    passport.authenticate('github', function(err, user, info) {
      console.log({err})
      console.log({user})
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);

  });
*/
router.get('/github/callback',
  passport.authenticate(
    'github',
    { failureRedirect: '/login' }
   // (error, user) => console.log('user', user)
  ),
  function(req, res) {
    //console.log(req.session)
    // Successful authentication, redirect home.

    res.redirect('http://localhost:3000/?token=whatever');
});

module.exports = router;
