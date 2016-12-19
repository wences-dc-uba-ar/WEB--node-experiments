/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cache_cambios', {
    Uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genero_principal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genero_secundario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subgeneros: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Distintivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Texto_Banner: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cache_cambios'
  });
};
