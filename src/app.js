import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routers/index";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// const options = {
//   definition: {
//     openapi: "3.0.1",
//     info: {
//       version: "1.0",
//       title: "Quiz API",
//       description: "Quiz API",
//     },
//     servers: [
//       {
//         url: `http://localhost:${PORT || 5000}`,
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//   },
//   apis: ["./routers/*.js"],
//   security: [{ bearerAuth: [] }],
// };

// const specs = swaggerJSDoc(options);

// app.use(
//   "/api-docs",
//   swaggerUI.serve,
//   swaggerUI.setup(options, { explorer: true })
// );

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes);

app.listen(PORT, console.log(`Server Listening on ${PORT}`));

export default app;
