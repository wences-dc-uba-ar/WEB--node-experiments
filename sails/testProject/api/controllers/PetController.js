/**
 * PetController
 *
 * @description :: Server-side logic for managing Pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    return res.send('Hi there!');
  },
  bye: function (req, res) {
    return res.redirect('http://www.sayonara.com');
  },

  addopt: function(req, res) {
  	// Given a Pet with ID 2 and a Pet with ID 20

	Pet.findOne(1).exec(function(err, pet) {
		if (err) {
			console.log('handle error');
		}

	  // Queue up a record to be inserted into the join table
	  pet.pets.add(2);

	  // Save the pet, creating the new associations in the join table
	  pet.save(function(err) {});
	});
  }

};

