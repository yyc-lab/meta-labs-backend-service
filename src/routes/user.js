const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('handling request')
  res.send(JSON.stringify({data :'respond with a resource'}));
});

/* GET user profile. */
router.get('/profile', function(req, res, next) {
  res.send(req.user);

});

module.exports = router;