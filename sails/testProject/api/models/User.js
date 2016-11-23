/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		name: {
			type: 'string',
			size: 12
		},
		email: {
			type: 'string',
			size: 12,
			required: true,
			unique: true
		},
		percent: {
			type: 'float',
			defaultsTo: function() {
				return Math.round(Math.random() * 100, 2);
			}
		},
		state: {
			type: 'string',
			enum: ['pending', 'approved', 'denied'],
			defaultsTo: 'pending'
		},
		// bestFriend: {
		// 	model: 'user'
		// },
		// friends1: {
		// 	collection: 'user',
		// 	via: 'friends2'
		// },
		// friends2: {
		// 	collection: 'user',
		// 	via: 'friends1'
		// },
	    pets:{
	      collection: 'pet',
	      via: 'owners',
	      dominant: true
	    },
	    // favorito: {
	    // 	model: 'pet'
	    // },




		// Attribute methods
		getFullName: function() {
			return this.name + ' ' + this.email;
		},
		isLoyal: function() {
			return !!this.bestFriend;
		},
		isFriendly: function() {
			return this.friends.length > 5;
		},
		hasChances: function() {
			return this.percent >= 55;
		}

	}
};