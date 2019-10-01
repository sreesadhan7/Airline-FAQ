const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const port = 8000;

var mysql     = require('mysql');
console.log("Running in port 8000")

var connection = mysql.createConnection({
    host     : 'database-1.ckyyhhxxabte.us-east-1.rds.amazonaws.com',
    port      :  '3306',
    user     : 'admin',
    password : '',
    database : ''
});

app.use(express.static(__dirname+'/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile('/index.html');
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
    var sec = "Baggage";
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data, sec:sec});
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
    var sec = "Licence";
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data, sec:sec});
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
    var sec = "Passenger";
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data, sec:sec});
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
    var sec = "Security";
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data, sec:sec});
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
      var sec = "Special Needs";
      res.render(path.join(__dirname+'/q&a.ejs'), {data: data, sec:sec});
    });
});

app.post('/visual', (req, res) => {

    var baggage = 0, license = 0, passenger = 0, security = 0, splneeds = 0;

    var sql = "select count(q_categoryName) as cbaggage from data where q_categoryName = 'Baggage'";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        baggage = results[0].cbaggage;

        var sql1 = "select count(q_categoryName) as clicense from data where q_categoryName = 'License'";
        connection.query(sql1, function (error, results, fields) {
        if (error) throw error;
        license = results[0].clicense;

        var sql2 = "select count(q_categoryName) as cpassenger from data where q_categoryName = 'Passenger'";
        connection.query(sql2, function (error, results, fields) {
        if (error) throw error;
        passenger = results[0].cpassenger;

        var sql3 = "select count(q_categoryName) as csecurity from data where q_categoryName = 'Security'";
        connection.query(sql3, function (error, results, fields) {
        if (error) throw error;
        security = results[0].csecurity;

        var sql4 = "select count(q_categoryName) as splneed from data where q_categoryName = 'Special Needs'";
        connection.query(sql4, function (error, results, fields) {
        if (error) throw error;
        splneeds = results[0].splneed;
        console.log("bagagge " + baggage);
        console.log("license = " + license);
        console.log("passenger = " + passenger);
        console.log("security = " + security);
        console.log("spl = " + splneeds);
        res.render(path.join(__dirname+'/visual.ejs'), {bagagge: baggage, license:license, passenger: passenger, security:security, spl:splneeds});
      });
      });
      });
      });
    });
});

app.post('/ques', (req, res) => {
    res.sendFile(path.join(__dirname+'/ques.html'));
});

app.listen(port);
