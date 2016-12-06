"use strict"

var express  = require('express')
 , Sequelize = require('sequelize')
 , http      = require('http')
 , restful   = require('sequelize-restful')
 , sequelize = new Sequelize('database', 'username', 'password')
 , app       = express();

// define all your models before the configure block


app.use(restful(sequelize, { }))

app.listen(8888, function(){
  console.log("Express server listening on port 8888");
});

