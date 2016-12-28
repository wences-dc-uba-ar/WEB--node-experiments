/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suscription', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    operators: {
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
    tableName: 'suscription'
  });
};
