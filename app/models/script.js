module.exports = function(sequelize, DataTypes) {
    var Script = sequelize.define("Script", {
      prescription_name: {
        type: DataTypes.STRING,
      },
      condition: {
        type: DataTypes.STRING,
      },
      dose: {
        type: DataTypes.STRING,
      }
    });
    return Script;
  };