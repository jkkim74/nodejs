const async = require('async');
async.series([
function(callback){console.log(1);},
function(callback){console.log(2);}
]);