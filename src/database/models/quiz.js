module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define(
    "Quiz",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Quiz.associate = function (models) {
    Quiz.hasMany(models.Question, {
      foreignKey: "quiz_id",
      as: "quiz",
      onDelete: "CASCADE",
    });
  };
  return Quiz;
};
