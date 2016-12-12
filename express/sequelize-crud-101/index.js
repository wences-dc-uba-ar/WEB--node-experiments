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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

app._router.stack.forEach(route => {
  if(route.route) {
    Object.keys(route.route.methods).forEach( method => {
      console.log(method+'    http://localhost:'+PORT+route.route.path);
    });
  }
});

//drop and resync with { force: true }
db.sequelize.sync({force: true, match: /^test$/ }).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port: http://localhost:'+PORT+'/');


    db.owners.create({  
      name: 'Loren',
      role: 'admin'
    })
    .then(newOwner => {
      console.log(`New owner ${newOwner.name}, with id ${newOwner.id} has been created.`);

      db.pets.create({  
        name: 'Max',
        owner_id: newOwner.id,
        type: 'cat'

      })
      .then(newPet => {
        console.log(`New ${newPet.type} ${newPet.name}, with id ${newPet.id} has been created.`);

        db.owners.findOne({  
          name: 'Loren'
        })
        .then(owner => {
          console.log(`Found owner: ${owner}`);
        });

        db.owners.findAll({  
          role: 'admin'
        })
        .then(admins => {
          console.log(`Found ${admins.length} matching records.`);
        });

        db.pets.findOne({  
          name: 'Max'
        })
        .then(pet => {
          pet.updateAttributes({
            name: 'Maxy-boi-boi'
          })
          .then(e => {
            db.pets.destroy({  
              where: {name: 'Max'}
            })
            .then(deletedPet => {
              console.log(`Has the Max been deleted? 1 means yes, 0 means no: ${deletedPet}`);
            });
          });
        })

      });
    });


  });
});