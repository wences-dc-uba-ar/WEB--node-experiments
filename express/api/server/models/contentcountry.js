/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contentcountry', {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Titulo_Qubit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Texto_Breve: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Texto_Largo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idioma_x_defecto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Clasificación: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Habilitado_Comercialmente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Disponible_Desde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Disponible_Hasta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TTL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
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
    tableName: 'contentcountry'
  });
};
