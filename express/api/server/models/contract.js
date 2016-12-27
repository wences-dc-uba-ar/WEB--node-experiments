/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract', {
    idCatalogo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idProveedor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Todos"
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    oculto: {
      type: DataTypes.INTEGER(1),
      allowNull: false
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
    tableName: 'contract'
  });
};
