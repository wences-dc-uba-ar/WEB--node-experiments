/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function(req, res) {
		return res.send('Hi there!');
	},
	bye: function(req, res) {
		return res.redirect('http://www.sayonara.com');
	},

	addopt: function(req, res) {
		// Given a User with ID 2 and a Pet with ID 20

		User.findOne(1).exec(function(err, user) {
			if (err) {
				console.log('handle error');
			}

			// Queue up a record to be inserted into the join table
			user.pets.add(1);

			// Save the user, creating the new associations in the join table
			user.save(function(err) {
				console.log('saved', err);
			});
		});
		return res.send('addopted!!!');
	},

	fabricar: function(req, res) {
		// console.log(req);
		User.findOne(1).exec(function(err, user) {
			if (err) {
				console.log('handle error');
			}

			// Queue up a new pet to be added and a record to be created in the join table
				user.pets.add({
				breed: 'labrador',
				type: 'dog',
				name: 'fido',
				color: 'brown'
			});

			// Save the user, creating the new pet and associations in the join table
			user.save(function(err) {
				console.log(err);
			});
		});

		return res.send('dog created!');
	},

	multiAdd: function(req, res) {
		User.findOne(5).exec(function(err, user) {
		  if(err) {
		  	console.log('handle error!')
		  }

		  // Queue up a record to be inserted into the join table
		  user.pets.add([1,2,4]);

		  // Save the user, creating the new pet and associations in the join table
		  user.save(function(err) {
		  	console.log(err);
		  });
		});

		return res.send('multi addopted!');
	},

	abandonar: function(req, res) {
		User.findOne(5).exec(function(err, user) {
		  if(err) {
		  	console.log('handle error!')
		  }

		  user.pets.remove([1,4]);

		  // Save the user, creating the new pet and syncing the associations in the join table
		  user.save(function(err) {});
		});

		return res.send('abandonado');
	}

};