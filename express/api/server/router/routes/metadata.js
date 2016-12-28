'use strict';

const env = require('../../config/env');

var toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

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

        // Tablas
        // db.sequelize.query(`SELECT TABLE_NAME AS name,TABLE_TYPE,TABLE_ROWS FROM information_schema.TABLES WHERE TABLE_SCHEMA = :database`,
        db.sequelize.query(`SELECT TABLE_NAME AS name FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :database AND COLUMN_NAME = 'id'`,
          {replacements: {database: env.DATABASE_NAME}, type: db.sequelize.QueryTypes.SELECT})
        .then(tablesResult => {

          // console.log(result);

          let rows = Object.keys(result).reduce(function(previous, key) {
            previous[key] = result[key];
            previous[key].text = result[key].name;
            try {
              previous[key].data = JSON.parse(result[key].data);
            } catch (e) {
              console.log('ERROR parsing JSON data on uiMenu, row ' + result[key].id + "\nParser says: " + e);
              previous[key].data = {};
            }
            return previous;
          }, []);

          // console.log(tablesResult);

          if(req.params.parent == 'root') {
            let tables = Object.keys(tablesResult).reduce(function(previous,key) {
              previous[key] = tablesResult[key];
              previous[key].text = toTitleCase(tablesResult[key].name.split('_').join(' '));
              previous[key].enabled = 1;
              previous[key].id = 1000 + parseInt(key);
              previous[key].parent = null;
              previous[key].order = 999;
              previous[key].data = {type: 'list', table: tablesResult[key].name};
              previous[key].created_at = new Date();
              previous[key].updated_at = new Date();

              return previous;
            }, []);
            // console.log(tables);
            rows = rows.concat(tables);
          }

          // console.log(rows);

          res.json({
            success: true,
            message: `menu for ` + req.params.parent,
            count: result.length + tablesResult.length,
            // rows: result.map(row => row.TABLE_NAME)
            rows: rows
          });

          
        });



      });
  });

};