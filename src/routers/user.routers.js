import userController from "../controllers/user.controllers";
import express from "express";
import {
  userValidation,
  loginValidation,
} from "../validations/user.validations";
import {
  checkUserExist,
  checkUserExistLogin,
} from "../middlewares/user.middleware";

const router = express();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for managing authentication
 */

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     summary: User registrations
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                  type: string
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a created user
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post(
  "/register",
  userValidation,
  checkUserExist,
  userController.registerUser
);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for managing authentication
 */

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a JWT token
 *       401:
 *         description: Unauthorized - invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post(
  "/login",
  loginValidation,
  checkUserExistLogin,
  userController.login
);

export default router;
