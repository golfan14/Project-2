module.exports = function(sequelize, DataTypes) {
    var History = sequelize.define("History", {
      event: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      }
    });
    return History;
  };