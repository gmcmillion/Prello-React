var express = require('express');
var router = express.Router();
var client = require('../postgres.js');
var currentClient = client.getClient();

// GET all lists for a specific board
router.get('/lists/:bid', function(req, res, next) {
	const query = {
    text: 'SELECT * FROM lists WHERE boardid = $1',
    values: [req.params.bid]
	}	
	currentClient.query(query, (err, result)=> {
		if (err) {
			console.log(err);
		} else {
			res.send(result.rows);
		}
	});
});

// GET all cards for a specific list
router.get('/cards/:lid', function(req, res, next) {
	const query = {
    text: 'SELECT * FROM cards WHERE listid = $1',
    values: [req.params.lid]
	}	
	currentClient.query(query, (err, result)=> {
		if (err) {
			console.log(err);
		} else {
			res.send(result.rows);
		}
	});
});

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

// DELETE a list
router.delete('/:lid', function(req, res) {
  console.log('DELETE');
});

// POST a new card
router.post('/newcard', function(req, res) {	
  const query = {
    text: 'INSERT INTO cards(cardname, listid) VALUES($1, $2) RETURNING *',
    values: [req.body.cardname, req.body.listid]
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