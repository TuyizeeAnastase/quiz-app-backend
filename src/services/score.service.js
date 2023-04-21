import { User, Quiz, Attempt } from "../database/models";
import { Op } from "sequelize";

export const addAttempt = async (attempt) => {
  return await Attempt.create(attempt);
};

export const getScoreByUser = async (user_id) => {
  return await Attempt.findAll({
    where: {
      user_id,
    },
    include: [
      {
        model: Quiz,
        as: "quiz_score",
      },
      {
        model: User,
        as: "user",
        attributes: { exclude: ["password"] },
      },
    ],
  });
};

export const getScoreByUserAndQuiz = async (user_id, quiz_id) => {
  return await Attempt.findAll({
    where: {
      [Op.and]: [{ quiz_id }, { user_id }],
    },
    include: [
      {
        model: Quiz,
        as: "quiz_score",
      },
      {
        model: User,
        as: "user",
        attributes: { exclude: ["password"] },
      },
    ],
  });
};

export const getQuizScore = async (quiz_id) => {
  return await Attempt.findAll({
    where: {
      quiz_id,
    },
    include: [
      {
        model: Quiz,
        as: "quiz_score",
      },
      {
        model: User,
        as: "user",
        attributes: { exclude: ["password"] },
      },
    ],
  });
};


export const getUserQuizScore = async (user_id) => {
    return await Attempt.findAll({
      where: {
        user_id,
      },
      include: [
        {
          model: Quiz,
          as: "quiz_score",
        },
        {
          model: User,
          as: "user",
          attributes: { exclude: ["password"] },
        },
      ],
    });
  };
