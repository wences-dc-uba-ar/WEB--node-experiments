/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_device', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operadores: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grupo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    distingue_hd: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'db_device'
  });
};
