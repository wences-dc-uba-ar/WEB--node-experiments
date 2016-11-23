'use strict';

var async = require('async');
var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

async.parallel({
  contents: async.apply(createContents),
  taxonomies: async.apply(createTaxonomies),
}, function(err, results) {
  if (err) throw err;
  createCategorizations(results.contents, results.taxonomies, function(err) {
    console.log('> models created sucessfully');
  });
});

function createTaxonomies(cb) {
  app.dataSources.bpm.automigrate('Taxonomy', function(err) {
    if (err) return cb(err);
    var Taxonomy = app.models.Taxonomy;
    Taxonomy.create(taxData, cb);
  });
}

function createContents(cb) {
  app.dataSources.bpm.automigrate('Content', function(err) {
    if (err) return cb(err);
    var Content = app.models.Content;
    Content.create(contentData, cb);
  });
}

function createCategorizations(contents, taxonomies, cb) {
  app.dataSources.bpm.automigrate('ContentTaxonomy', function(err) {
    if (err) return cb(err);
    var ContentTaxonomy = app.models.ContentTaxonomy;
    ContentTaxonomy.create(categorizations, cb);
  });
}
    var taxData = [];
    for (var i = 1; i <= 4; i++) {
      taxData.push ({
    id: i,
    name: "name" + i,
    minChilds: 0,
    maxChilds: i+1,
    enabled: true
      });
    };

    var contentData = [];
    for (var i = 1; i <= 4; i++) {
      contentData.push({
    name: "name_" + i,
    uuid: "uuid_" + i,
    idItem: i,
    buscable: true,
    tituloInternacional: "tituloInternacional_" + i,
    tituloOriginal: "tituloOriginal_" + i,
    temporada:  i,
    episodio: i,
    duracion: i,
    desde: new Date().toJSON().slice(0,10),
    hasta: new Date().toJSON().slice(0,10),
    pais: "AR",
    subtitulos: "ES",
    doblada: true,
    calidad: "HD",
    relevancia: i,
    ranking: i,
    widevine: "widevine_" + i,
    creditsBeginEnd: i,
    creditsEndBegin: i,
    imdbId: i
      })
    };

    var categorizations = [];
    for (var t = 0; t < taxData.length; t++) {
      for (var c = 0; c < contentData.length; c++) {
        if(t!=c) {
          categorizations.push({
            contentId: contentData[c].idItem,
        taxonomyId: taxData[t].id,
        order: t+c
          });
        }
      }
    }
    // console.log('contentData',contentData);
    // console.log('taxData',taxData);
    // console.log('categorizations',categorizations);
