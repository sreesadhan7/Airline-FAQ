
var mysql = require('mysql');

exports.handler = (event,context,callback) => {
context.callbackWaitsForEmptyEventLoop = false;


  let emails=event.email;
  let ques = event.question;

  var connection = mysql.createConnection({
    host     : 'database-1.ckyyhhxxabcq.us-east-1.rds.amazonaws.com',
    port      :  '3306',
    user     : 'admin',
    password : '',
    database : ''
  });



    var sql = "INSERT INTO query (email, question) VALUES ('"+emails+"','"+ques+"')";
    connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    callback(null,"1 record inserted")
    });
};
