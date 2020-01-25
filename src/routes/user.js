const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json({data: 'respond with a resource'});
});

/* GET user profile. */
router.get('/profile', function(req, res) {
  res.startus(200).json({data: req.user});
});

module.exports = router;