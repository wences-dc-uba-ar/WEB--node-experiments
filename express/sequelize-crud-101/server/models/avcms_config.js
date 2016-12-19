/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avcms_config', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    config: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'avcms_config'
  });
};
