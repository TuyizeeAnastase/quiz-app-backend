import express from "express";
import userRoute from "./user.routers";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import swaggerOptions from "../util/swaggerOptions";
import welcomeRoute from "./welcome.routers";
import quizRoute from "./quiz.routers";

const swaggerDoc = swaggerJsdoc(swaggerOptions);
const routes = express();

routes.use("/", welcomeRoute);

routes.use("/api/v1/user", userRoute);
routes.use("/api/v1/quiz", quizRoute);

routes.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
