module.exports = function(sequelize, DataTypes) {
    var Med = sequelize.define("Med", {
      name: {
        type: DataTypes.STRING
      },
      is_prescription: {
        type: DataTypes.BOOLEAN,
      },
      condition: {
        type: DataTypes.STRING,
      },
      dose: {
        type: DataTypes.STRING,
      }
    });
    return Med;
  };