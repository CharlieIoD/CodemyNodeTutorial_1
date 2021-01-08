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
    
//   Create a Table
    var sql = 'CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('This table has been created...');
    });
});
