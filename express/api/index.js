'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  db = require('./server/config/db.js'),
  env = require('./server/config/env'),
  router = require('./server/router/index');

const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('json spaces', 4);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync({force: false, match: /^bpm$/ }).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port: http://localhost:'+PORT+'/');

    /*
    db.owner.create({
      name: 'Loren',
      role: 'admin'
    })
    .then(newOwner => {
      console.log(`New owner ${newOwner.name}, with id ${newOwner.id} has been created.`);

      db.pet.create({  
        name: 'Max',
        owner_id: newOwner.id,
        type: 'cat'

      })
      .then(newPet => {
        console.log(`New ${newPet.type} ${newPet.name}, with id ${newPet.id} has been created.`);

        db.owner.findOne({  
          name: 'Loren'
        })
        .then(owner => {
          console.log(`Found owner: ${owner}`);
        });

        db.owner.findAll({  
          role: 'admin'
        })
        .then(admins => {
          console.log(`Found ${admins.length} matching records.`);
        });

        db.pet.findOne({  
          name: 'Max'
        })
        .then(pet => {
          pet.updateAttributes({
            name: 'Maxy-boi-boi'
          })
          .then(e => {
            db.pet.destroy({  
              where: {name: 'Max'}
            })
            .then(deletedPet => {
              console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedPet}`);
            });
          });
        })

      });
    });

    for (var i = 1 ; i < 35; i++) {
      db.owner.create({name: 'Loren'+i,role: 'admin'})
    }
    */
  });
});