/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operators: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'device'
  });
};
