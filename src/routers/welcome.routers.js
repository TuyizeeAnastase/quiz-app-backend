import express from "express";
import welcomeController from "../controllers/welcome.controllers";

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - welcome message
 *     summary: welcome to Quiz app
 *     description: Display welcome message
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *             description: Welcome to phantom, a platform to facilitate the transportation mode in town!.
 * */

router.get("/", welcomeController.welcome);

export default router;
