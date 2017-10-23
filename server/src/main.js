import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';

const app = express();

let port = 8080;

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../../build'));

app.use('/api', api);
app.get('/user', function (req, res) {
  res.send('Hello User Bye~!!!!@#@#@@$@$@$@$!');
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
})
