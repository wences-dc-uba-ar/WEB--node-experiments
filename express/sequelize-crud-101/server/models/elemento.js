/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elemento', {
    idElemento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "uuid-no-seteado"
    },
    idTipoElemento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'content_type',
        key: 'idTipoElemento'
      }
    },
    idEstado: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    activodesde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    fechaIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    borrado: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    borrador: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    widevine: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    escanal: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    contenidos_canal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    subtitulos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    calidad: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'elemento'
  });
};
