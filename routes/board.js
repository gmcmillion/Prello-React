var express = require('express');
var router = express.Router();
var client = require('../postgres.js');
var currentClient = client.getClient();

// POST a new list
router.post('/newlist', function(req, res) {	
  const query = {
    text: 'INSERT INTO lists(listname, boardid) VALUES($1, $2) RETURNING *',
    values: [req.body.listName, req.body.boardid]
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