//this set up the model I used for the DB to store each individual vote.
module.exports = function(sequelize, DataTypes) {
  let Vote = sequelize.define("Vote", {
    email: DataTypes.STRING,
    framework: DataTypes.STRING
  });
  return Vote;
};
