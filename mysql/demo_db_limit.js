var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * You can limit the number of records returned from the query,
// * by using the "LIMIT" statement
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    })
})