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
      //Sets a cookie with the users info
      // console.log('USER INFO: '+JSON.stringify(result.rows[0]));
      req.session.user = result.rows[0];
      res.send(result.rows[0]);
    }
  });
});

//Register user, and redirect to boards
router.post('/login', function(req, res) {
  const query = {
		text: 'SELECT * FROM users WHERE username = $1',
		values: [req.body.username]
	}
  currentClient.query(query, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      if(result.rows.length === 0) {
				console.log('USER DOESNT EXIST');
				res.redirect('/');
      } else {
        //Verify hashed password matches
        if(result.rows[0].password == req.body.password) {
          // console.log("MATCHES: "+JSON.stringify(result.rows[0]));
          //Sets a cookie with the users info
          req.session.user = result.rows[0];
          res.send(result.rows[0]);
        } else {
          console.log('PASSWORD DOES NOT MATCH');
          res.redirect('/');
        }
      }
    }
  });
});

module.exports = router;
