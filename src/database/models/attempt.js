module.exports = (sequelize, DataTypes) => {
  const Attempt = sequelize.define(
    "Attempt",
    {
      user_id: DataTypes.INTEGER,
      quiz_id: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {}
  );
  Attempt.associate = function (models) {
    Attempt.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });
    Attempt.belongsTo(models.Quiz, {
      foreignKey: "quiz_id",
      as: "quiz_score",
      onDelete: "CASCADE",
    });
  };
  return Attempt;
};
