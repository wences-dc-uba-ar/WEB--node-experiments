'use strict'

module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('owner', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4
    // },
    name: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        is3LettersOrMore: function(value) {
          if(value.length < 3) {
            throw new Error({message: "must contain at least 3 letters"});
          }
        }
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'disabled']

    }
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    // updated_at:  DataTypes.DATE,
    // deleted_at: DataTypes.DATE
  }, {
    indexes: [
      {
        unique: true,
        fields: ['name']
      }
    ],
    paranoid: true
  });
  return Owner;
};