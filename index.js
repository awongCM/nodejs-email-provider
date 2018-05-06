const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  
  // CORS - only for local dev purposes!!
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', router);

app.listen(process.env.PORT  || 7000, () => console.log('Server listening on port 7000'));

