'use strict';

module.exports = (app, db) => {

  // GET all owners
  app.get('/owners', (req, res) => {
    let offset = parseInt(req.query.start) || 0;
    let limit = parseInt(req.query.limit) || 5;
    
    db.owners.findAndCountAll({offset: offset, limit: limit})
      .then(result => {
        result.success = true;
        result.offset = offset;
        result.limit = limit;
        result.message = `take ${result.rows.length} rows, skipping ${offset}, from a total of ${result.count}`;
        res.json(result);
      });
  });

  // GET one owner by id
  app.get('/owner/:id', (req, res) => {
    const id = req.params.id;
    db.owners.find({
      where: { id: id}
    })
      .then(owner => {
        res.json(owner);
      });
  });

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
};