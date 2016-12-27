/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxonomy', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // min_childs: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   defaultValue: "0"
    // },
    // max_childs: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   defaultValue: "5"
    // },
    enabled: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'taxonomy'
  });
};
