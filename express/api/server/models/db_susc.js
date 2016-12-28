/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_susc', {
    id: {
      type: DataTypes.INTEGER(3),
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
    precio: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    operadores: {
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
    tableName: 'db_susc'
  });
};
