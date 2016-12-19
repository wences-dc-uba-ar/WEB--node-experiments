/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lista: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    operador: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dispositivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SD_1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    HD_1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SD_2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    HD_2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SD_3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    HD_3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    reglas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precios: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    final: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'productos'
  });
};
