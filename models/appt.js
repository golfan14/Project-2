module.exports = function(sequelize, DataTypes) {
    var Appt = sequelize.define("Appt", {
      date: {
        type: DataTypes.DATEONLY,
      },
      time: {
        type: DataTypes.TIME,
      },
      type: {
        type: DataTypes.STRING,
      },
      reason: DataTypes.STRING
    });
    return Appt;
  };