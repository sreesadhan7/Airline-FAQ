const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const port = 8000;

var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : '',
    port      :  '3306',
    user     : 'admin',
    password : '',
    database : 'case_study'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.post('/baggage', (req, res) => {
    let data = {};

    var sql = "select * from data where q_categoryCode = 1";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      var i = 0;
      results.forEach(element => {
          data[i] = {'question': element.question, 'answer': element.answer};
          i++;
      });
    //   console.log(data);
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data});
    });
});

app.post('/Licence', (req, res) => {
    let data = {};

    var sql = "select * from data where q_categoryCode = 2";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      var i = 0;
      results.forEach(element => {
          data[i] = {'question': element.question, 'answer': element.answer};
          i++;
      });
    //   console.log(data);
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data});
    });
});

app.post('/Passenger', (req, res) => {
    let data = {};

    var sql = "select * from data where q_categoryCode = 3";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      var i = 0;
      results.forEach(element => {
          data[i] = {'question': element.question, 'answer': element.answer};
          i++;
      });
    //   console.log(data);
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data});
    });
});

app.post('/Security', (req, res) => {
    let data = {};

    var sql = "select * from data where q_categoryCode = 4";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      var i = 0;
      results.forEach(element => {
          data[i] = {'question': element.question, 'answer': element.answer};
          i++;
      });
    //   console.log(data);
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data});
    });
});

app.post('/Special_needs', (req, res) => {
    let data = {};

    var sql = "select * from data where q_categoryCode = 5";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      var i = 0;
      results.forEach(element => {
          data[i] = {'question': element.question, 'answer': element.answer};
          i++;
      });
      console.log(data);
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data});
    });
});

app.post('/ques', (req, res) => {

      res.sendFile(path.join(__dirname+'/ques.html'));
});

app.listen(port);
