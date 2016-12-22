/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Buscable: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Subgeneros: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Titulo_Internacional: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Titulo_Original: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Episodio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Duracion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Desde: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Hasta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Texto_Banner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Subtitulos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Doblada: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Calidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Relevancia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ranking: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Distintivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    WIDEVINE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    credits_begin_end: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    credits_end_begin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    imdb_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    published: {
      type: DataTypes.TIME,
      allowNull: true
    },
    created: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    env: {
      type: DataTypes.ENUM('DRAFT','PROD','PREPROD','DELETED'),
      allowNull: false,
      defaultValue: "DRAFT"
    },
    contenttype_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "1"
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
    tableName: 'content'
  });
};
