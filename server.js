'use strict';

const express = require('express');
const cors = require('cors');
const { noRouteExist } = require('./00-error-handlers/404');
const { errorHandler } = require('./00-error-handlers/500');
const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send(`main route`);
});






app.use('*', noRouteExist);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => { console.log(`Up and running at ${port}`) });
}

module.exports = { start };