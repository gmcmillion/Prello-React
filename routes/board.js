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
    text: 'INSERT INTO lists(listname, boardid, listauthor) VALUES($1, $2, $3) RETURNING *',
    values: [req.body.listName, req.body.boardid, req.body.listauthor]
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
  console.log('DELETE LIST');
});

// POST a new card
router.post('/newcard', function(req, res) {	
  const query = {
    text: 'INSERT INTO cards(cardname, listid, cardauthor) VALUES($1, $2, $3) RETURNING *',
    values: [req.body.cardname, req.body.listid, req.body.cardauthor]
  }
  currentClient.query(query, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

// POST a new label
router.post('/newlabel/:cid', function(req, res) {	
  console.log('NEWLABEL');

  const query = {
    text: 'INSERT INTO labels(color, cardid) VALUES($1, $2) RETURNING *',
    values: [req.body.color, req.params.cid]
  }
  currentClient.query(query, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

// GET labels
router.get('/labels/:cid', function(req, res){
  const query = {
    text: 'SELECT * FROM labels WHERE cardid = $1',
    values: [req.params.cid]
  }	
  currentClient.query(query, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

// DELETE a card
router.delete('/deletecard/:cid', function(req, res) {
  //Delete query
	const query = {
		text: 'DELETE FROM cards WHERE id = $1',
		values: [req.params.cid]
	}	
	//Run query
	currentClient.query(query, (err, result)=> {
		if (err) {
			console.log(err);
		} else {
			//Also DELETE any labels associated with this deleted card
			const query = {
				text: 'DELETE FROM labels WHERE cardid = $1',
				values: [req.params.cid]
			}	
			currentClient.query(query, (err, result)=> {
				if (err) {
					console.log(err);
				} else {
					res.send(result);
				}
			});
		}
	});
});

module.exports = router;