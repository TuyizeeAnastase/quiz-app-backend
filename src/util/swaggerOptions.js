import path from "path";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Quiz",
      version: "1.0.0",
      license: {},
      contact: {},
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      { url: "http://localhost:4500" },
      {
        url: 'https://quiz-jahk.onrender.com',
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routers/*.js")],
  security: [{ bearerAuth: [] }],
};
export default swaggerOptions;
