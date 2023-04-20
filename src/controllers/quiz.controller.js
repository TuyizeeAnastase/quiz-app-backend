import {
  createQuiz,
  getQuestionByQuiz,
  addQuestion,
} from "../services/quiz.services";
import { getPagination, getPagingData } from "../util/pagination";

export class QuizControllers {
  async addQuiz(req, res) {
    try {
      const { title, description } = req.body;
      const newQuiz = await createQuiz({ title, description });
      return res.status(201).json({
        message: "Quiz created successfully, now you can add questions",
        newQuiz,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while adding quiz",
        error: err.message,
      });
    }
  }

  async addQuestion(req, res) {
    try {
      const { question, answer } = req.body;
      console.log(req.body.options);
      const quiz = req.quiz;
      const newQuestion = {
        question,
        answer,
        quiz_id: quiz.id,
        options: JSON.parse(req.body.options),
      };
      const addedQuestion = await addQuestion(newQuestion);
      return res.status(201).json({
        message: `New question added to ${quiz.title} quiz`,
        addedQuestion,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while adding questions",
        error: err.message,
      });
    }
  }

  async getQuestions(req, res) {
    try {
      const { id } = req.params;
      const limit = req.query.limit ? req.query.limit : 10;
      const { page } = req.query;
      const { resultsLimit, offset } = getPagination(page, limit);
      const results = await getQuestionByQuiz(id, resultsLimit, offset);
      const questions = getPagingData(results, page, resultsLimit)
      return res.status(200).json({
        questions,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while geting quiz questions",
        error: err.message,
      });
    }
  }
}

const quizController = new QuizControllers();
export default quizController;
