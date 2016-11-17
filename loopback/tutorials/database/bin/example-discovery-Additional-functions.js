// http://loopback.io/doc/en/lb2/Discovering-models-from-relational-databases.html#example-discovery

// console.log('1','npm install loopback-connector-oracle --save');
// console.log('2','export LD_LIBRARY_PATH="/opt/qubit/node-experiments/loopback/tutorials/database/node_modules/instantclient"');

var loopback = require('loopback');
var ds = loopback.createDataSource('oracle', {
  "host": "oracle-demo.strongloop.com",
  "port": 1521,
  "database": "XE",
  "username": "demo",
  "password": "L00pBack"
});

var cb = function(err, data) {
  if (err) throw err;
  
  console.log(JSON.stringify(data, null, '  '));
}


'List database tables and/or views'
// ds.discoverModelDefinitions({views: true, limit: 20}, cb);
// [ { R: 1, type: 'table', name: 'ACCESSTOKEN', owner: 'DEMO' },
//   { R: 2, type: 'table', name: 'ACCOUNT', owner: 'DEMO' },
//   { R: 3, type: 'table', name: 'ACL', owner: 'DEMO' },
//   { R: 4, type: 'table', name: 'CUSTOMER', owner: 'DEMO' },
//   { R: 5, type: 'table', name: 'INVENTORY', owner: 'DEMO' },
//   { R: 6, type: 'table', name: 'LOCATION', owner: 'DEMO' },
//   { R: 7, type: 'table', name: 'NOTE', owner: 'DEMO' },
//   { R: 8, type: 'table', name: 'PRODUCT', owner: 'DEMO' },
//   { R: 9, type: 'table', name: 'RESERVATION', owner: 'DEMO' },
//   { R: 10, type: 'table', name: 'ROLE', owner: 'DEMO' },
//   { R: 11, type: 'table', name: 'ROLEMAPPING', owner: 'DEMO' } ]

'List database columns for a given table/view'
// ds.discoverModelProperties('PRODUCT', cb);
// [ { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'ID',       dataType: 'VARCHAR2', dataLength: 20,   dataPrecision: null, dataScale: null, nullable: 'N', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'VIN',      dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'YEAR',     dataType: 'NUMBER',   dataLength: 22,   dataPrecision: null, dataScale: null, nullable: 'Y', type: 'Number' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'MAKE',     dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'MODEL',    dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'IMAGE',    dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'CARCLASS', dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'PRODUCT', columnName: 'COLOR',    dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' } ]

// ds.discoverModelProperties('LOCATION', {}, cb);
// [ { owner: 'DEMO', tableName: 'LOCATION', columnName: 'ID',      dataType: 'VARCHAR2', dataLength: 20,   dataPrecision: null, dataScale: null, nullable: 'N', type: 'String' },
//   { owner: 'DEMO', tableName: 'LOCATION', columnName: 'STREET',  dataType: 'VARCHAR2', dataLength: 64,   dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'LOCATION', columnName: 'CITY',    dataType: 'VARCHAR2', dataLength: 64,   dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'LOCATION', columnName: 'ZIPCODE', dataType: 'VARCHAR2', dataLength: 20,   dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'LOCATION', columnName: 'NAME',    dataType: 'VARCHAR2', dataLength: 32,   dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' },
//   { owner: 'DEMO', tableName: 'LOCATION', columnName: 'GEO',     dataType: 'VARCHAR2', dataLength: 1024, dataPrecision: null, dataScale: null, nullable: 'Y', type: 'String' } ]

'List primary keys for a given table'
// ds.discoverPrimaryKeys('INVENTORY',  cb);
// [ { owner: 'DEMO',
//     tableName: 'INVENTORY',
//     columnName: 'ID',
//     keySeq: 1,
//     pkName: 'SYS_C004889' } ]

'List foreign keys for a given table';
// ds.discoverForeignKeys('INVENTORY',  cb);
// [ { keySeq: 1, fkOwner: 'DEMO', pkOwner: 'DEMO', fkColumnName: 'LOCATION_ID', pkColumnName: 'ID', pkName: 'SYS_C004890', pkTableName: 'LOCATION', fkTableName: 'INVENTORY', fkName: 'LOCATION_FK' },
//   { keySeq: 1, fkOwner: 'DEMO', pkOwner: 'DEMO', fkColumnName: 'PRODUCT_ID',  pkColumnName: 'ID', pkName: 'SYS_C004891', pkTableName: 'PRODUCT',  fkTableName: 'INVENTORY', fkName: 'PRODUCT_FK' } ]

'List foreign keys that reference the primary key of the given table'
// ds.discoverExportedForeignKeys('PRODUCT',  cb);
// [ { keySeq: 1, fkOwner: 'DEMO', pkOwner: 'DEMO', fkColumnName: 'PRODUCT_ID', pkColumnName: 'ID' pkName: 'SYS_C004891', pkTableName: 'PRODUCT', fkTableName: 'INVENTORY',   fkName: 'PRODUCT_FK' },
  // { keySeq: 1, fkOwner: 'DEMO', pkOwner: 'DEMO', fkColumnName: 'PRODUCT_ID', pkColumnName: 'ID' pkName: 'SYS_C004891', pkTableName: 'PRODUCT', fkTableName: 'RESERVATION', fkName: 'RESERVATION_PRODUCT_FK' } ]

'Create a model definition by discovering the given table'
// ds.discoverSchema('PRODUCT', {owner: 'DEMO'}, cb);
// { name: "Product",
//   options: {
//     idInjection: false,
//     oracle: {schema: "DEMO", table: "PRODUCT"}},
//   properties: {
//     color:    { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "COLOR"}},
//     carclass: { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "CARCLASS"}},
//     image:    { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "IMAGE"}},
//     model:    { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "MODEL"}},
//     make:     { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "MAKE"}},
//     year:     { 	type: "Number", length: 22,   scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 22,   dataType: "NUMBER",   columnName: "YEAR"}},
//     vin:      { 	type: "String", length: 1024, scale: null, precision: null, required: false,		oracle: { dataScale: null, dataPrecision: null, nullable: "Y", dataLength: 1024, dataType: "VARCHAR2", columnName: "VIN"}},
//     id:       { 	type: "String", length: 20,   scale: null, precision: null, required: true,  id: 1, oracle: { dataScale: null, dataPrecision: null, nullable: "N", dataLength: 20,   dataType: "VARCHAR2", columnName: "ID"}}}}
