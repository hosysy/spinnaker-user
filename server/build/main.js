'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 8080;

app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(__dirname + '/../../build'));

app.use('/api', _routes2.default);
app.get('/user', function (req, res) {
  res.send('Hello User Bye~!!!!@#@#@@$@$@$@$!');
});

app.listen(port, function () {
  console.log('Express is listening on port', port);
});