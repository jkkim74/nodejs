var db      = require('./db');
var connection = db.connection();
var post  = {name : 'kenu2', email: 'kenu2.heo@gmail.com', passwd: 'okpassokpass'};
var query = connection.query('INSERT INTO user SET ?', post, function(err, result) {
    console.log(result);
});
connection.end();

console.log(query.sql);