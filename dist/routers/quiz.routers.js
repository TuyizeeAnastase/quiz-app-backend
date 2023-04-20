"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _quiz = _interopRequireDefault(require("../controllers/quiz.controller"));
var _express = _interopRequireDefault(require("express"));
var _protectRoutes = require("../middlewares/protectRoutes.middleware");
var _quiz2 = require("../validations/quiz.validations");
var _quiz3 = require("../middlewares/quiz.middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express["default"])();

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

router.post("/", _protectRoutes.protect, (0, _protectRoutes.restrictTo)("admin"), _quiz2.quizValidation, _quiz["default"].addQuiz);

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

router.post("/question", _protectRoutes.protect, (0, _protectRoutes.restrictTo)("admin"), _quiz2.questionValidation, _quiz3.checkQuizExist, _quiz["default"].addQuestion);

/**
 * @swagger
 * /api/v1/quiz/question/{id}:
 *   get:
 *     summary: Get the question by quiz id
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

router.get("/question/:id", _protectRoutes.protect, _quiz["default"].getQuestions);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcXVpeiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V4cHJlc3MiLCJfcHJvdGVjdFJvdXRlcyIsIl9xdWl6MiIsIl9xdWl6MyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJyb3V0ZXIiLCJleHByZXNzIiwicG9zdCIsInByb3RlY3QiLCJyZXN0cmljdFRvIiwicXVpelZhbGlkYXRpb24iLCJxdWl6Q29udHJvbGxlciIsImFkZFF1aXoiLCJxdWVzdGlvblZhbGlkYXRpb24iLCJjaGVja1F1aXpFeGlzdCIsImFkZFF1ZXN0aW9uIiwiZ2V0IiwiZ2V0UXVlc3Rpb25zIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvcXVpei5yb3V0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWl6Q29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvcXVpei5jb250cm9sbGVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcHJvdGVjdCwgcmVzdHJpY3RUbyB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9wcm90ZWN0Um91dGVzLm1pZGRsZXdhcmVcIjtcbmltcG9ydCB7XG4gIHF1aXpWYWxpZGF0aW9uLFxuICBxdWVzdGlvblZhbGlkYXRpb24sXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy9xdWl6LnZhbGlkYXRpb25zXCI7XG5pbXBvcnQgeyBjaGVja1F1aXpFeGlzdCB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9xdWl6Lm1pZGRsZXdhcmVcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcygpO1xuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiB0YWdzOlxuICogICBuYW1lOiBRdWl6XG4gKiAgIGRlc2NyaXB0aW9uOiBBUEkgZm9yIGNyZWF0aW5nIFF1aXpcbiAqL1xuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiAvYXBpL3YxL3F1aXo6XG4gKiAgIHBvc3Q6XG4gKiAgICAgc3VtbWFyeTogYWRkIG5ldyBxdWl6XG4gKiAgICAgdGFnczogW1F1aXpdXG4gKiAgICAgc2VjdXJpdHk6XG4gKiAgICAgICAtIGJlYXJlckF1dGg6IFtdXG4gKiAgICAgcmVxdWVzdEJvZHk6XG4gKiAgICAgICByZXF1aXJlZDogdHJ1ZVxuICogICAgICAgY29udGVudDpcbiAqICAgICAgICAgYXBwbGljYXRpb24vanNvbjpcbiAqICAgICAgICAgICBzY2hlbWE6XG4gKiAgICAgICAgICAgICB0eXBlOiBvYmplY3RcbiAqICAgICAgICAgICAgIHByb3BlcnRpZXM6XG4gKiAgICAgICAgICAgICAgIHRpdGxlOlxuICogICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAqICAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgcmVzcG9uc2VzOlxuICogICAgICAgMjAwOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogUmV0dXJucyBhIGNyZWF0ZWQgcXVpelxuICogICAgICAgNDAxOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogVW5hdXRob3JpemVkIC0gaW52YWxpZCBjcmVkZW50aWFsc1xuICogICAgICAgNTAwOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogSW50ZXJuYWwgc2VydmVyIGVycm9yXG4gKi9cblxucm91dGVyLnBvc3QoXG4gIFwiL1wiLFxuICBwcm90ZWN0LFxuICByZXN0cmljdFRvKFwiYWRtaW5cIiksXG4gIHF1aXpWYWxpZGF0aW9uLFxuICBxdWl6Q29udHJvbGxlci5hZGRRdWl6XG4pO1xuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiB0YWdzOlxuICogICBuYW1lOiBRdWl6XG4gKiAgIGRlc2NyaXB0aW9uOiBBUEkgZm9yIGFkZGluZyBxdWVzdGlvblxuICovXG5cbi8qKlxuICogQHN3YWdnZXJcbiAqIC9hcGkvdjEvcXVpei9xdWVzdGlvbjpcbiAqICAgcG9zdDpcbiAqICAgICBzdW1tYXJ5OiBhZGQgbmV3IHF1ZXN0aW9uIHRvIHF1aXpcbiAqICAgICB0YWdzOiBbUXVpel1cbiAqICAgICBzZWN1cml0eTpcbiAqICAgICAgIC0gYmVhcmVyQXV0aDogW11cbiAqICAgICByZXF1ZXN0Qm9keTpcbiAqICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gKiAgICAgICBjb250ZW50OlxuICogICAgICAgICBhcHBsaWNhdGlvbi9qc29uOlxuICogICAgICAgICAgIHNjaGVtYTpcbiAqICAgICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgICAgcHJvcGVydGllczpcbiAqICAgICAgICAgICAgICAgcXVlc3Rpb246XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIG9wdGlvbnM6XG4gKiAgICAgICAgICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgICAgICAgICBpdGVtczpcbiAqICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmdcbiAqICAgICAgICAgICAgICAgYW5zd2VyOlxuICogICAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmdcbiAqICAgICAgICAgICAgICAgcXVpel9pZDpcbiAqICAgICAgICAgICAgICAgICAgdHlwZTogaW50ZWdlclxuICogICAgIHJlc3BvbnNlczpcbiAqICAgICAgIDIwMDpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFJldHVybnMgYSBjcmVhdGVkIHF1ZXN0aW9uXG4gKiAgICAgICA0MDE6XG4gKiAgICAgICAgIGRlc2NyaXB0aW9uOiBVbmF1dGhvcml6ZWQgLSBpbnZhbGlkIGNyZWRlbnRpYWxzXG4gKiAgICAgICA1MDA6XG4gKiAgICAgICAgIGRlc2NyaXB0aW9uOiBJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcbiAqL1xuXG5yb3V0ZXIucG9zdChcbiAgXCIvcXVlc3Rpb25cIixcbiAgcHJvdGVjdCxcbiAgcmVzdHJpY3RUbyhcImFkbWluXCIpLFxuICBxdWVzdGlvblZhbGlkYXRpb24sXG4gIGNoZWNrUXVpekV4aXN0LFxuICBxdWl6Q29udHJvbGxlci5hZGRRdWVzdGlvblxuKTtcblxuLyoqXG4gKiBAc3dhZ2dlclxuICogL2FwaS92MS9xdWl6L3F1ZXN0aW9uL3tpZH06XG4gKiAgIGdldDpcbiAqICAgICBzdW1tYXJ5OiBHZXQgdGhlIHF1ZXN0aW9uIGJ5IHF1aXogaWRcbiAqICAgICB0YWdzOiBbUXVpel1cbiAqICAgICBzZWN1cml0eTpcbiAqICAgICAgIC0gYmVhcmVyQXV0aDogW11cbiAqICAgICBwYXJhbWV0ZXJzOlxuICogICAgICAgLSBpbjogcGF0aFxuICogICAgICAgICBuYW1lOiBpZFxuICogICAgICAgICBzY2hlbWE6XG4gKiAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gKiAgICAgICAgIGRlc2NyaXB0aW9uOiBUaGUgcXVpeiBpZFxuICogICAgIHJlc3BvbnNlczpcbiAqICAgICAgIDIwMDpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IHF1ZXN0aW9ucyBieSBxdWl6IGlkXG4gKiAgICAgICAgIGNvbnRlbnM6XG4gKiAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjpcbiAqICAgICAgIDQwNDpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFRoZSBxdWl6IHdhcyBub3QgZm91bmRcbiAqL1xuXG5yb3V0ZXIuZ2V0KFwiL3F1ZXN0aW9uLzppZFwiLCBwcm90ZWN0LCBxdWl6Q29udHJvbGxlci5nZXRRdWVzdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLGNBQUEsR0FBQUYsT0FBQTtBQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtBQUlBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtBQUFnRSxTQUFBRCx1QkFBQU0sR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRWhFLElBQU1FLE1BQU0sR0FBRyxJQUFBQyxtQkFBTyxHQUFFOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRCxNQUFNLENBQUNFLElBQUksQ0FDVCxHQUFHLEVBQ0hDLHNCQUFPLEVBQ1AsSUFBQUMseUJBQVUsRUFBQyxPQUFPLENBQUMsRUFDbkJDLHFCQUFjLEVBQ2RDLGdCQUFjLENBQUNDLE9BQU8sQ0FDdkI7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVAsTUFBTSxDQUFDRSxJQUFJLENBQ1QsV0FBVyxFQUNYQyxzQkFBTyxFQUNQLElBQUFDLHlCQUFVLEVBQUMsT0FBTyxDQUFDLEVBQ25CSSx5QkFBa0IsRUFDbEJDLHFCQUFjLEVBQ2RILGdCQUFjLENBQUNJLFdBQVcsQ0FDM0I7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVYsTUFBTSxDQUFDVyxHQUFHLENBQUMsZUFBZSxFQUFFUixzQkFBTyxFQUFFRyxnQkFBYyxDQUFDTSxZQUFZLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRW5EYixNQUFNO0FBQUFjLE9BQUEsY0FBQUQsUUFBQSJ9