import { Quiz, Question } from "../database/models";

export const createQuiz = async (quiz) => {
  return await Quiz.create(quiz);
};

export const getQuestionByQuiz = async (quiz_id, limit, offset) => {
  return await Question.findAndCountAll({
    where: {
      quiz_id,
    },
    limit,
    offset,
    include: [
      {
        model: Quiz,
        as: "quiz",
      },
    ],
  });
};

export const addQuestion = async (question) => {
  return await Question.create(question);
};
