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
    
//   Alter Table
    var sql = 'ALTER TABLE customers ADD COLUMN id INTEGER AUTO_INCREMENT PRIMARY KEY';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('This table has been altered...');
    });
});
