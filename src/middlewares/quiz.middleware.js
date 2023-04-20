import { Quiz } from "../database/models";

export const checkQuizExist = async (req, res, next) => {
  const { quiz_id } = req.body;
  const quiz = await Quiz.findOne({
    where: {
      id: quiz_id,
    },
  });
  if (!quiz) {
    res.status(404).json({
      message: "Selected Quiz doesn't exist",
    });
    return false;
  }
  req.quiz = quiz;
  next();
};
