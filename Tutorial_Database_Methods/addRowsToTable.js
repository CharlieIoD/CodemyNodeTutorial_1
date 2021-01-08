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
    
//   Insert data to Table
    var sql = "INSERT INTO customers (name, email) VALUES ?";
    var values = [
        ['Clive', 'clive@hotmail.com'],
        ['Mick', 'mick@hotmail.com'],
        ['Kevin', 'kevin@hotmail.com'],
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + ' records inserted into table.');
    });
});
