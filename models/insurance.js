module.exports = function(sequelize, DataTypes) {
    var Insurance = sequelize.define("Insurance", {
      type: {
        type: DataTypes.STRING,
      },
      carrier: {
        type: DataTypes.STRING,
      },
      insured_name: {
        type: DataTypes.STRING,
      },
      id_number: {
          type: DataType.INTEGER,
      },
      group_id: {
          type: DataType.INTEGER
      },
      effective_date: {
          type: DataType.DATEONLY
      }
    })

    Insurance.associate = function (models) {
      Insurance.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Insurance;
  };