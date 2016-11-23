/**
 * Pet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    breed: {
    	type: 'string'
    },
    type: {
    	type: 'string'
    },
    
    owners:{
      collection: 'user',
      via: 'pets'
    }
  }
};