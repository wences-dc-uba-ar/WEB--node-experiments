/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sello', {
    idSello: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idIMDB: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sello'
  });
};
