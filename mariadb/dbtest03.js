var db      = require('./db');
var connection = db.connection();

connection.query('SELECT * FROM user', function(err, rows, fields) {
  if (err) throw err;

  console.log('The user is: ', rows[0]);
  for(idx in rows){
		console.log(rows[idx]);  
  }
});

connection.end();