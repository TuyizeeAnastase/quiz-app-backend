import quizController from "../controllers/quiz.controller";
import express from "express";
import { protect, restrictTo } from "../middlewares/protectRoutes.middleware";
import {
  quizValidation,
  questionValidation,
} from "../validations/quiz.validations";
import { checkQuizExist } from "../middlewares/quiz.middleware";

const router = express();

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: API for creating Quiz
 */

/**
 * @swagger
 * /api/v1/quiz:
 *   post:
 *     summary: add new quiz
 *     description: add new quiz to database by only admin user
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns a created quiz
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post(
  "/",
  protect,
  quizValidation,
  quizController.addQuiz
);

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: API for adding question
 */

/**
 * @swagger
 * /api/v1/quiz/question:
 *   post:
 *     summary: add new question to quiz
 *     description: add questions and answers to any specific quiz
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               options:
 *                  type: object
 *                  items:
 *                    type: string
 *               answer:
 *                  type: string
 *               quiz_id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Returns a created question
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post(
  "/question",
  protect,
  questionValidation,
  checkQuizExist,
  quizController.addQuestion
);

/**
 * @swagger
 * /api/v1/quiz/question/{id}:
 *   get:
 *     summary: Get the question by quiz id example id 1,....
 *     description: get quiz many questions and select any randomly to return them to enduser
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quiz id
 *     responses:
 *       200:
 *         description: questions by quiz id
 *         contens:
 *           application/json:
 *       404:
 *         description: The quiz was not found
 */

router.get("/question/:id", protect, quizController.getQuestions);

export default router;
