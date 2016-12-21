/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dispositivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    habilitado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    susc_1_SD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    susc_1_HD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    susc_2_SD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    susc_2_HD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    susc_3_SD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    susc_3_HD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
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
    tableName: 'product'
  });
};
