import AppAdminList from './src/AppAdminList';

var express = require('express');
var app = express();

app.get('/appAdminList', function (req, res) {
  //indexPage = fs.readFileSync( './public/index.html', 'utf8')
  console.log(AppAdminList);
  res.send(AppAdminList);
});

app.get('/user', function (req, res) {
  res.send('Hello User Bye~!!!!@#@#@@$@$@$@$!');
});

app.get('/user2', function (req, res) {
  res.send('Hello User2 Bye~!');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});

app.get('/user/register', function (req, res) {
  res.send('Welcome Register Page!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
