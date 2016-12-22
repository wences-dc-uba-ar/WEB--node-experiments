'use strict';

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
    
    db.sequelize.query(
      `SELECT COLUMN_NAME,COLUMN_DEFAULT,IS_NULLABLE,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,COLUMN_KEY,COLUMN_COMMENT FROM information_schema.COLUMNS WHERE TABLE_NAME = :table`,
      {replacements: {table: req.params.table}, type: db.sequelize.QueryTypes.SELECT})
    .then(result => {
        res.json({
          success: true,
          message: `info about ${req.params.table}`,
          count: result.length,
          rows: result
        });
      });
  });

};