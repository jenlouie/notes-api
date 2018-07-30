const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Note = require('./app/models/note');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes here
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('Notes is live on ' + port);
});