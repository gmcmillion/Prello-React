var pg = require('pg');

//Get environment if testing
var environment = process.env.NODE_ENV;
var connectionString = 'postgres://postgres:pgpass@localhost:5432/postgresreact';
if(environment === 'test') {
    connectionString = 'postgres://postgres:pgpass@localhost:5432/postgresreact';        //Testing database
}

var currentClient = new function() {
    //Create a new instance of client
    var client = new pg.Client(connectionString);	

    //Establish connection with client
    this.connect = function() {
        client.connect((err)=> {
            if(!err){
                console.log('CLIENT CONNECTED TO: '+ connectionString);
                //Run query with client to create tables
                client.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, username VARCHAR(100), password VARCHAR(100), email VARCHAR(100))');
                client.query('CREATE TABLE IF NOT EXISTS boards(id SERIAL PRIMARY KEY, boardname VARCHAR(100), boardauthor VARCHAR(100), boardauthorid VARCHAR(100))');                
            }
        });
    }
    //Get client
    this.getClient = function() {
        return client;
    }

    //Wipe database for testing
    this.truncate = function() {
        client.query('TRUNCATE users');
    }

    //Logout
    this.logout = function() {
        client.end();
    }
}

module.exports = currentClient;