import {
  addAttempt,
  getQuizScore,
  getScoreByUser,
  getScoreByUserAndQuiz,
  getUserQuizScore,
} from "../services/score.service";

export class ScoreControllers {
  async getUserQuiz(req, res) {
    try {
      const user = req.user;
      const score = await getScoreByUser(user.id);
      return res.status(201).json({
        score,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting score",
        error: err.message,
      });
    }
  }

  async getUserQuizesScore(req, res) {
    try {
      const user = req.user;
      const { id } = req.params;
      const score = await getScoreByUserAndQuiz(user.id, id);
      return res.status(201).json({
        score,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting score",
        error: err.message,
      });
    }
  }

  async addAttemptScore(req, res) {
    try {
      const { quiz_id, score } = req.body;
      const user_id = req.user.id;
      const newAttempt = await addAttempt({ quiz_id, score, user_id });
      return res.status(201).json({
        newAttempt,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while saving score",
        error: err.message,
      });
    }
  }

  async getAllQuizScore(req, res) {
    try {
      const { id } = req.params;
      const quizes = await getQuizScore(id);
      return res.status(200).json({
        quizes,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting all score for user",
        error: err.message,
      });
    }
  }

  async getAllUserScore(req, res) {
    try {
      const { id } = req.params;
      const quizes = await getUserQuizScore(id);
      return res.status(200).json({
        quizes,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting all score for quiz",
        error: err.message,
      });
    }
  }
}

const scroreController = new ScoreControllers();
export default scroreController;
