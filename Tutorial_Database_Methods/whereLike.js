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
// Select Specific Data
    
    var sql = "SELECT name FROM customers WHERE name LIKE 'C%'";
    
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        
        console.log(result);
        
    });
});
