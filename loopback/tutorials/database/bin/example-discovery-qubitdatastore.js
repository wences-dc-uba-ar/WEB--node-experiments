// http://loopback.io/doc/en/lb2/Discovering-models-from-relational-databases.html#example-discovery




var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  host: "localhost",
  port: 3306,
  database: "qubitdatastore_pm",
  username: "qubit",
  password: "qubit"
});

var cb = function(err, data) {
  if (err) throw err;
  
  console.log(JSON.stringify(data, null, '  '));
}

'List database tables and/or views'
// ds.discoverModelDefinitions({views: true}, cb);
// [ {type: "view", owner: "qubitdatastore_pm", name: "cache_country_edit"  },
//   ...
//   {type: "view", owner: "wf_workflow", name: "casos_finalizados"  }]

// ds.discoverModelDefinitions({owner:"qubitdatastore_pm"}, cb);
// [ { type: "table", schema: "qubitdatastore_pm", name: "agrupacion"  },
//   ...
//   { type: "table", schema: "qubitdatastore_pm", name: "usuario"  }]
  

'List database columns for a given table/view'
// ds.discoverModelProperties('elemento', cb);
// [ owner: "qubitdatastore_pm",tableName: "elemento",
//   {dataScale: 0,    nullable: "N", dataPrecision: 10,   type: "Number", dataLength: null, dataType: "int",     columnName: "idElemento" },
//   {dataScale: null, nullable: "Y", dataPrecision: null, type: "String", dataLength: 255,  dataType: "varchar", columnName: "id" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 10,   type: "Number", dataLength: null, dataType: "int",     columnName: "idTipoElemento" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 10,   type: "Number", dataLength: null, dataType: "int",     columnName: "idEstado" },
//   {dataScale: null, nullable: "Y", dataPrecision: null, type: "Date",   dataLength: null, dataType: "date",    columnName: "activodesde" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 10,   type: "Number", dataLength: null, dataType: "int",     columnName: "idUsuario" },
//   {dataScale: null, nullable: "Y", dataPrecision: null, type: "Date",   dataLength: null, dataType: "datetime",columnName: "fechaIngreso" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 3,    type: "Number", dataLength: null, dataType: "tinyint", columnName: "borrado" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 3,    type: "Number", dataLength: null, dataType: "tinyint", columnName: "borrador" },
//   {dataScale: null, nullable: "N", dataPrecision: null, type: "String", dataLength: 255,  dataType: "varchar", columnName: "widevine" },
//   {dataScale: 0,    nullable: "N", dataPrecision: 3,    type: "Number", dataLength: null, dataType: "tinyint", columnName: "escanal" },
//   {dataScale: null, nullable: "N", dataPrecision: null, type: "String", dataLength: 255,  dataType: "varchar", columnName: "contenidos_canal" },
//   {dataScale: null, nullable: "N", dataPrecision: null, type: "String", dataLength: 2,    dataType: "varchar", columnName: "subtitulos" },
//   {dataScale: null, nullable: "N", dataPrecision: null, type: "String", dataLength: 2,    dataType: "varchar", columnName: "calidad" }
// ]

'List primary keys for a given table'
// ds.discoverPrimaryKeys('INVENTORY',  cb);

'List foreign keys for a given table';
// ds.discoverForeignKeys('INVENTORY',  cb);

'List foreign keys that reference the primary key of the given table'
// ds.discoverExportedForeignKeys('PRODUCT',  cb);

'Create a model definition by discovering the given table'
// owner: 'DEMO'
// ds.discoverSchema('elemento', {realtions: true}, cb);
// { name: "Elemento",
//   options: {    idInjection: false,    mysql: {      schema: "qubitdatastore_pm",      table: "elemento"    }  },
//   properties: {
//     idelemento: { type: "Number",  required: true, length: null, precision: 10, scale: 0, id: 1,       mysql: { columnName: "idElemento", dataType: "int", dataLength: null, dataPrecision: 10, dataScale: 0, nullable: "N"} },
//     id: {  type: "String", required: false, length: 255, precision: null, scale: null,       mysql: { columnName: "id", dataType: "varchar", dataLength: 255, dataPrecision: null, dataScale: null, nullable: "Y"} },
//     idtipoelemento: {  type: "Number", required: true, length: null, precision: 10, scale: 0,        mysql: { columnName: "idTipoElemento", dataType: "int", dataLength: null, dataPrecision: 10, dataScale: 0, nullable: "N"} },
//     idestado: {  type: "Number", required: true, length: null, precision: 10, scale: 0,        mysql: { columnName: "idEstado", dataType: "int", dataLength: null, dataPrecision: 10, dataScale: 0, nullable: "N"} },
//     activodesde: {  type: "Date", required: false, length: null, precision: null, scale: null,        mysql: { columnName: "activodesde", dataType: "date", dataLength: null, dataPrecision: null, dataScale: null, nullable: "Y"} },
//     idusuario: {  type: "Number", required: true, length: null, precision: 10, scale: 0,        mysql: { columnName: "idUsuario", dataType: "int", dataLength: null, dataPrecision: 10, dataScale: 0, nullable: "N"} },
//     fechaingreso: {  type: "Date", required: false, length: null, precision: null, scale: null,        mysql: { columnName: "fechaIngreso", dataType: "datetime", dataLength: null, dataPrecision: null, dataScale: null, nullable: "Y"} },
//     borrado: {  type: "Number", required: true, length: null, precision: 3, scale: 0,       mysql: { columnName: "borrado", dataType: "tinyint", dataLength: null, dataPrecision: 3, dataScale: 0, nullable: "N"} },
//     borrador: {  type: "Number", required: true, length: null, precision: 3, scale: 0,       mysql: { columnName: "borrador", dataType: "tinyint", dataLength: null, dataPrecision: 3, dataScale: 0, nullable: "N"} },
//     widevine: {  type: "String", required: true, length: 255, precision: null, scale: null,        mysql: { columnName: "widevine", dataType: "varchar", dataLength: 255, dataPrecision: null, dataScale: null, nullable: "N"} },
//     escanal: {  type: "Number", required: true, length: null, precision: 3, scale: 0,       mysql: { columnName: "escanal", dataType: "tinyint", dataLength: null, dataPrecision: 3, dataScale: 0, nullable: "N"} },
//     contenidosCanal: {  type: "String", required: true, length: 255, precision: null, scale: null,        mysql: { columnName: "contenidos_canal", dataType: "varchar", dataLength: 255, dataPrecision: null, dataScale: null, nullable: "N"} },
//     subtitulos: {  type: "String", required: true, length: 2, precision: null, scale: null,        mysql: { columnName: "subtitulos", dataType: "varchar", dataLength: 2, dataPrecision: null, dataScale: null, nullable: "N"} },
//     calidad: {  type: "String", required: true, length: 2, precision: null, scale: null,        mysql: { columnName: "calidad", dataType: "varchar", dataLength: 2, dataPrecision: null, dataScale: null, nullable: "N"} }
//   }
// }

// ds.discoverSchemas('PRODUCT', {realtions: true, all: true, views: true}, cb);
