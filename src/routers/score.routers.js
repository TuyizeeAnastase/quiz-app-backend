import scroreController, {
  ScoreControllers,
} from "../controllers/score.controller";
import express from "express";
import { protect, restrictTo } from "../middlewares/protectRoutes.middleware";

const router = express();

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: API for getting quiz score
 */

/**
 * @swagger
 * /api/v1/score:
 *   get:
 *     summary: get  more quiz score
 *     description: get all score for quiz for logged user
 *     tags: [Score]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a score
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.get("/", protect, scroreController.getUserQuiz);

/**
 * @swagger
 * /api/v1/score/quiz/{id}:
 *   get:
 *     summary: Get the score of one quiz
 *     description: gett attempted quiz score by user
 *     tags: [Score]
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
 *         description: scores
 *         contens:
 *           application/json:
 *       404:
 *         description: The quiz was not found
 */

router.get("/quiz/:id", protect, scroreController.getUserQuizesScore);

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: API for getting quiz score
 */

/**
 * @swagger
 * /api/v1/score:
 *   post:
 *     summary: save quiz attempt
 *     description: submit or save the score by user
 *     tags: [Score]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score:
 *                 type: integer
 *               quiz_id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Returns a created attempted quiz
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post("/", protect, scroreController.addAttemptScore);

/**
 * @swagger
 * /api/v1/score/admin/{id}:
 *   get:
 *     summary: get all quiz attempted
 *     description: get all attempted quiz, by only admin user
 *     tags: [Admin]
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
 *         description: Returns quizes
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.get(
  "/admin/:id",
  protect,
  scroreController.getAllQuizScore
);

/**
 * @swagger
 * /api/v1/score/admin/{id}/user:
 *   get:
 *     summary: get all user score
 *     description: get all user score, by only admin user
 *     tags: [Admin]
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
 *         description: Returns score
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.get(
  "/admin/:id/user",
  protect,
  scroreController.getAllUserScore
);

export default router;
