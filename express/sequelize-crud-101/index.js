'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./server/config/db.js'),
  env = require('./server/config/env'),
  router = require('./server/router/index');

const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

app._router.stack.forEach(route => {
  if(route.route) {
    Object.keys(route.route.methods).forEach( method => {
      console.log(method+'    http://localhost:'+PORT+route.route.path);
    });
  }
});

//drop and resync with { force: true }
db.sequelize.sync({force: true, match: /^test$/ }).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port: http://localhost:'+PORT+'/');
  });
});