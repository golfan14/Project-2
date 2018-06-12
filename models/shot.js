module.exports = function(sequelize, DataTypes) {
    var Shot = sequelize.define("Shot", {
      immunization_name: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      }
    });
    return Shot;
  };