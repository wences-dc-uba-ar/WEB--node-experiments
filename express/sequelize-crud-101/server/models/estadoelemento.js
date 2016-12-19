/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estadoelemento', {
    idEstado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'estadoelemento'
  });
};
