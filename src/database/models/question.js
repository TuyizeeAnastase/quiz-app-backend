module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      question: DataTypes.STRING,
      options: DataTypes.ARRAY(DataTypes.STRING),
      answer: DataTypes.STRING,
      quiz_id: DataTypes.INTEGER,
    },
    {}
  );
  Question.associate = function (models) {
    Question.belongsTo(models.Quiz, {
      foreignKey: "quiz_id",
      as: "quiz",
      onDelete: "CASCADE",
    });
  };
  return Question;
};
