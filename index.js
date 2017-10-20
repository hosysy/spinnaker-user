var express = require('express');
var app = express();

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
