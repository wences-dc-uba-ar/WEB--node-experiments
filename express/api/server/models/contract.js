/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stat_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Todos"
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hidden: {
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
