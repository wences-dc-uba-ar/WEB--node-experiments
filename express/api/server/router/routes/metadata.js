'use strict';

const env = require('../../config/env');

module.exports = (app, db) => {

  app.get('/metadata/:table', (req, res) => {
    // TABLE_CATALOG": "def",
    // TABLE_SCHEMA": "test",
    // TABLE_NAME": "owner",
    // CHARACTER_OCTET_LENGTH": null,
    // NUMERIC_SCALE": 0,
    // CHARACTER_SET_NAME": null,
    // COLLATION_NAME": null,
    // EXTRA": "auto_increment",
    // PRIVILEGES": "select,insert,update,references",
    // COLUMN_TYPE, -- "int(11)",
    // ORDINAL_POSITION,
    let query = `SELECT COLUMN_NAME,COLUMN_DEFAULT,IS_NULLABLE,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,COLUMN_KEY,COLUMN_COMMENT FROM information_schema.COLUMNS WHERE TABLE_NAME = :table AND TABLE_SCHEMA = :schema`;
    db.sequelize.query(query, {replacements: {table: req.params.table, schema: env.DATABASE_NAME}, type: db.sequelize.QueryTypes.SELECT})
    .then(result => {
        res.json({
          // debug: {query: query},
          success: true,
          message: `info about ${req.params.table}`,
          count: result.length,
          rows: result
        });
      });
  });

  app.get('/metadata', (req, res) => {
    db.sequelize.query(
      `SELECT TABLE_NAME,TABLE_TYPE,TABLE_ROWS FROM information_schema.TABLES WHERE TABLE_SCHEMA = :database`,
      {replacements: {database: env.DATABASE_NAME}, type: db.sequelize.QueryTypes.SELECT})
    .then(result => {
        res.json({
          success: true,
          message: `tables list`,
          count: result.length,
          // rows: result.map(row => row.TABLE_NAME)
          rows: result
        });
      });
  });

  app.get('/metadata/menu/:parent', (req, res) => {
    console.log(req.params);
    let query = 'SELECT * FROM uiMenu WHERE parent IS NULL ORDER BY `order`,`id`';
    if(req.params.parent != 'root' && req.params.parent != undefined) {
      query = 'SELECT * FROM uiMenu WHERE parent = :parent ORDER BY `order`,`id`';
    }
    db.sequelize.query(query,{replacements: {parent: req.params.parent}, type: db.sequelize.QueryTypes.SELECT})
    .then(result => {
        res.json({
          success: true,
          message: `menu for ` + req.params.parent,
          count: result.length,
          // rows: result.map(row => row.TABLE_NAME)
          rows: Object.keys(result).reduce(function(previous, key) {
            previous[key] = result[key];
            previous[key].text = result[key].name;
            try {
              previous[key].data = JSON.parse(result[key].data);
            } catch (e) {
              console.log('ERROR parsing JSON data on uiMenu, row ' + result[key].id + "\nParser says: " + e);
              previous[key].data = {};
            }
            return previous;
          }, [])
        });
      });
  });

};