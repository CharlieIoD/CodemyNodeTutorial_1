var mysql = require('mysql');

// Create a connection

var con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database: 'nodedb'
});

// Connect to Mysql
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database');
    
    con.query('CREATE DATABASE nodeDB', function (err, result) {
        if (err) throw err;
        console.log('Database Created!');
    });
});

