"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _user = _interopRequireDefault(require("../controllers/user.controllers"));
var _express = _interopRequireDefault(require("express"));
var _user2 = require("../validations/user.validations");
var _user3 = require("../middlewares/user.middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express["default"])();

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

router.post("/register", _user2.userValidation, _user3.checkUserExist, _user["default"].registerUser);

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

router.post("/login", _user2.loginValidation, _user3.checkUserExistLogin, _user["default"].login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V4cHJlc3MiLCJfdXNlcjIiLCJfdXNlcjMiLCJvYmoiLCJfX2VzTW9kdWxlIiwicm91dGVyIiwiZXhwcmVzcyIsInBvc3QiLCJ1c2VyVmFsaWRhdGlvbiIsImNoZWNrVXNlckV4aXN0IiwidXNlckNvbnRyb2xsZXIiLCJyZWdpc3RlclVzZXIiLCJsb2dpblZhbGlkYXRpb24iLCJjaGVja1VzZXJFeGlzdExvZ2luIiwibG9naW4iLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVycy91c2VyLnJvdXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXJzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtcbiAgdXNlclZhbGlkYXRpb24sXG4gIGxvZ2luVmFsaWRhdGlvbixcbn0gZnJvbSBcIi4uL3ZhbGlkYXRpb25zL3VzZXIudmFsaWRhdGlvbnNcIjtcbmltcG9ydCB7XG4gIGNoZWNrVXNlckV4aXN0LFxuICBjaGVja1VzZXJFeGlzdExvZ2luLFxufSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvdXNlci5taWRkbGV3YXJlXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MoKTtcblxuLyoqXG4gKiBAc3dhZ2dlclxuICogdGFnczpcbiAqICAgbmFtZTogQXV0aFxuICogICBkZXNjcmlwdGlvbjogQVBJIGZvciBtYW5hZ2luZyBhdXRoZW50aWNhdGlvblxuICovXG5cbi8qKlxuICogQHN3YWdnZXJcbiAqIC9hcGkvdjEvdXNlci9yZWdpc3RlcjpcbiAqICAgcG9zdDpcbiAqICAgICBzdW1tYXJ5OiBVc2VyIHJlZ2lzdHJhdGlvbnNcbiAqICAgICB0YWdzOiBbQXV0aF1cbiAqICAgICByZXF1ZXN0Qm9keTpcbiAqICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gKiAgICAgICBjb250ZW50OlxuICogICAgICAgICBhcHBsaWNhdGlvbi9qc29uOlxuICogICAgICAgICAgIHNjaGVtYTpcbiAqICAgICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgICAgcHJvcGVydGllczpcbiAqICAgICAgICAgICAgICAgdXNlcm5hbWU6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIGVtYWlsOlxuICogICAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmdcbiAqICAgICAgICAgICAgICAgcGFzc3dvcmQ6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgcmVzcG9uc2VzOlxuICogICAgICAgMjAwOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogUmV0dXJucyBhIGNyZWF0ZWQgdXNlclxuICogICAgICAgNDAxOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogVW5hdXRob3JpemVkIC0gaW52YWxpZCBjcmVkZW50aWFsc1xuICogICAgICAgNTAwOlxuICogICAgICAgICBkZXNjcmlwdGlvbjogSW50ZXJuYWwgc2VydmVyIGVycm9yXG4gKi9cblxucm91dGVyLnBvc3QoXG4gIFwiL3JlZ2lzdGVyXCIsXG4gIHVzZXJWYWxpZGF0aW9uLFxuICBjaGVja1VzZXJFeGlzdCxcbiAgdXNlckNvbnRyb2xsZXIucmVnaXN0ZXJVc2VyXG4pO1xuXG4vKipcbiAqIEBzd2FnZ2VyXG4gKiB0YWdzOlxuICogICBuYW1lOiBBdXRoXG4gKiAgIGRlc2NyaXB0aW9uOiBBUEkgZm9yIG1hbmFnaW5nIGF1dGhlbnRpY2F0aW9uXG4gKi9cblxuLyoqXG4gKiBAc3dhZ2dlclxuICogL2FwaS92MS91c2VyL2xvZ2luOlxuICogICBwb3N0OlxuICogICAgIHN1bW1hcnk6IFVzZXIgbG9naW5cbiAqICAgICB0YWdzOiBbQXV0aF1cbiAqICAgICByZXF1ZXN0Qm9keTpcbiAqICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gKiAgICAgICBjb250ZW50OlxuICogICAgICAgICBhcHBsaWNhdGlvbi9qc29uOlxuICogICAgICAgICAgIHNjaGVtYTpcbiAqICAgICAgICAgICAgIHR5cGU6IG9iamVjdFxuICogICAgICAgICAgICAgcHJvcGVydGllczpcbiAqICAgICAgICAgICAgICAgdXNlcm5hbWU6XG4gKiAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgICAgICAgICAgIHBhc3N3b3JkOlxuICogICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICogICAgIHJlc3BvbnNlczpcbiAqICAgICAgIDIwMDpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFJldHVybnMgYSBKV1QgdG9rZW5cbiAqICAgICAgIDQwMTpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IFVuYXV0aG9yaXplZCAtIGludmFsaWQgY3JlZGVudGlhbHNcbiAqICAgICAgIDUwMDpcbiAqICAgICAgICAgZGVzY3JpcHRpb246IEludGVybmFsIHNlcnZlciBlcnJvclxuICovXG5cbnJvdXRlci5wb3N0KFxuICBcIi9sb2dpblwiLFxuICBsb2dpblZhbGlkYXRpb24sXG4gIGNoZWNrVXNlckV4aXN0TG9naW4sXG4gIHVzZXJDb250cm9sbGVyLmxvZ2luXG4pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtBQUlBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtBQUd3QyxTQUFBRCx1QkFBQUssR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRXhDLElBQU1FLE1BQU0sR0FBRyxJQUFBQyxtQkFBTyxHQUFFOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQsTUFBTSxDQUFDRSxJQUFJLENBQ1QsV0FBVyxFQUNYQyxxQkFBYyxFQUNkQyxxQkFBYyxFQUNkQyxnQkFBYyxDQUFDQyxZQUFZLENBQzVCOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQU4sTUFBTSxDQUFDRSxJQUFJLENBQ1QsUUFBUSxFQUNSSyxzQkFBZSxFQUNmQywwQkFBbUIsRUFDbkJILGdCQUFjLENBQUNJLEtBQUssQ0FDckI7QUFBQyxJQUFBQyxRQUFBLEdBRWFWLE1BQU07QUFBQVcsT0FBQSxjQUFBRCxRQUFBIn0=