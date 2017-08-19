const express = require('express');
const router = express.Router();
const mfp = require('mfp');

router.get('/', function(req, res, next) {

  let date = req.query.date;
  let user = req.query.user;

  if (date === undefined || user === undefined) {
    res.status(404).json({ error: 'You must specify a user and a date.' })
  }

  mfp.fetchSingleDate(user, date, 'all', function(data){
    res.status(200).json(data);
  });

});

module.exports = router;
