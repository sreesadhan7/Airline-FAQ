var mysql = require('mysql');

exports.handler = (event,context,callback) => {

  let uname=event.username;
  let pass=event.password;

  var connection = mysql.createConnection({
    host     : 'database-1.ckyyhhxxnsqz.us-east-1.rds.amazonaws.com',
    port      :  '3306',
    user     : 'admin',
    password : '199919991999',
    database : 'case_study'
  });

  connection.connect(function(err){
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
    });

    var sql = "INSERT INTO query (email, question) VALUES ('"+emails+"','"+ques+"')";
    connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    callback(null,"We will get back to you with the answer.")
    });
};
