/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operators: {
      type: DataTypes.STRING,
      allowNull: true
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Todos"
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
    tableName: 'list'
  });
};
