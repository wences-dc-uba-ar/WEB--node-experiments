/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_country', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lang_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    language_name: {
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
    tableName: 'db_country'
  });
};
