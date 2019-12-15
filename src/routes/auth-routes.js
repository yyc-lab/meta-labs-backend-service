const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/github',  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' , 'session': true}),
  function(req, res) {
    console.log('user', req.session.passport.user)
    const token = jwt.sign(req.session.passport.user, 'your_jwt_secret');
    res.redirect(`http://localhost:3000/?token=${token}`);
});

module.exports = router;
