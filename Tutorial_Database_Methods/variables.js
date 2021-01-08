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
// Select Specific Data Where Clause
    var name_search = 'C%';
    var id_search = 4;
    var sql = "SELECT * FROM customers WHERE name LIKE ? OR id = ?";
    
    con.query(sql, [name_search, id_search], function (err, result, fields) {
        if (err) throw err;
        
        console.log(result);
        
    });
});
