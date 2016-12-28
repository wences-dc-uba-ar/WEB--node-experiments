/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uiMenu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    data: {
      type: DataTypes.TEXT,
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
    tableName: 'uiMenu'
  });
};
