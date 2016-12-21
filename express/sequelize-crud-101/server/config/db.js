'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const models = require('../models');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    timestamps: true,
    // paranoid: true,
    freezeTableName: true,
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
Object.keys(models).forEach(function(key) {
    let model = models[key];
    db[key] = model(sequelize, Sequelize);
});

//Relations
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);

module.exports = db;