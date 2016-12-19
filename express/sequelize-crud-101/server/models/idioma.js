/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idioma', {
    idIdioma: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ISO639_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO639_2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'idioma'
  });
};
