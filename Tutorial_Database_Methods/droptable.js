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
// Drop Table
    var sql = "DROP TABLE IF EXISTS customers";
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        
        console.log(result);
        
    });
});
