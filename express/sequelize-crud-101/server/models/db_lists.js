/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_lists', {
    id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operadores: {
      type: DataTypes.STRING,
      allowNull: true
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Todos"
    }
  }, {
    tableName: 'db_lists'
  });
};
