var express = require('express');
var router = express.Router();
var client = require('../postgres.js');
var currentClient = client.getClient();

//Register user, and redirect to boards
router.post('/register', function(req, res) {
  const query = {
    text: 'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *',
    values: [req.body.username, req.body.password, req.body.email]
  }
  currentClient.query(query, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

module.exports = router;
