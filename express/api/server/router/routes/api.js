'use strict';

const env = require('../../config/env');

module.exports = (app, db) => {

  // GET rows
  app.get('/api/:model', (req, res) => {
    let offset = parseInt(req.query.start) || 0;
    let limit = parseInt(req.query.limit) || 10;
    let options = {
      offset: offset,
      limit: limit
    };
    if(req.query.fields) {
      options.attributes = req.query.fields.split(',');
    }
    let sort, length;
    if(req.query.sort && (sort=JSON.parse(req.query.sort)) && (length = sort.length)) {
      options.order = [];
      for(var i=0;i<length;i++) {
        options.order.push([sort[i].property, sort[i].direction]);
      }
    }

    let filter;
    if(req.query.filter && (filter=JSON.parse(req.query.filter)) && (length = filter.length)) {
      // [{"operator":"like","value":"4","property":"id"},{"operator":"like","value":"ee","property":"Titulo_Internacional"}]
      options.where = {};
      for(var i=0;i<length;i++) {
        options.where[filter[i].property] = {$like: '%'+filter[i].value+'%'};
      }
    }
    console.log(options);

    db[req.params.model].findAndCountAll(options)
      .then(result => {
        result.success = true;
        result.offset = offset;
        result.limit = limit;
        result.message = `take ${result.rows.length} ${req.params.model} rows, skipping ${offset}, from a total of ${result.count}`;
        res.json(result);
      });
    
  });

  app.get('/api/:model/:id', (req, res) => {
    const model = req.params.model;
    const id = req.params.id;
    db[req.params.model].find({
      where: { id: id}
    })
      .then(model => {
        res.json(model);
      });
  });

/*
  // POST single owner
  app.post('/owner', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.owners.create({
      name: name,
      role: role
    })
      .then(newOwner => {
        res.json(newOwner);
      })
  });

  // PATCH single owner
  app.patch('/owner/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.owners.find({
      where: { id: id }
    })
      .then(owner => {
        return owner.updateAttributes(updates)
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });

  // DELETE single owner
  app.delete('/owner/:id', (req, res) => {
    const id = req.params.id;
    db.owners.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  });
  */

};