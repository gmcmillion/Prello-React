var express = require('express');
var router = express.Router();
var client = require('../postgres.js');
var currentClient = client.getClient();

//GET boards listing
router.get('/listofboards', function(req, res, next) {
	const query = {
		text: 'SELECT * FROM boards'
	}	
	currentClient.query(query, (err, result)=> {
		if (err) {
			console.log(err);
		} else {
			res.json(result.rows);
		}
	});
});

// POST a new board
router.post('/newboard', function(req, res) {	
  const query = {
    text: 'INSERT INTO boards(boardname, boardauthor, boardauthorid) VALUES($1, $2, $3) RETURNING *',
    values: [req.body.name, req.body.username, req.body.userid]
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