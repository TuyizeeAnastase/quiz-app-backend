"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routers/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT;

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

app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])("tiny"));
app.use((0, _cors["default"])());
app.use(_index["default"]);
app.listen(PORT, console.log("Server Listening on ".concat(PORT)));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2RvdGVudiIsIl9jb3JzIiwiX2JvZHlQYXJzZXIiLCJfbW9yZ2FuIiwiX2luZGV4Iiwib2JqIiwiX19lc01vZHVsZSIsImRvdGVudiIsImNvbmZpZyIsImFwcCIsImV4cHJlc3MiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsInVzZSIsImpzb24iLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwibW9yZ2FuIiwiY29ycyIsInJvdXRlcyIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXJzL2luZGV4XCI7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVDtcblxuLy8gY29uc3Qgb3B0aW9ucyA9IHtcbi8vICAgZGVmaW5pdGlvbjoge1xuLy8gICAgIG9wZW5hcGk6IFwiMy4wLjFcIixcbi8vICAgICBpbmZvOiB7XG4vLyAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxuLy8gICAgICAgdGl0bGU6IFwiUXVpeiBBUElcIixcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIlF1aXogQVBJXCIsXG4vLyAgICAgfSxcbi8vICAgICBzZXJ2ZXJzOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUIHx8IDUwMDB9YCxcbi8vICAgICAgIH0sXG4vLyAgICAgXSxcbi8vICAgICBjb21wb25lbnRzOiB7XG4vLyAgICAgICBzZWN1cml0eVNjaGVtZXM6IHtcbi8vICAgICAgICAgYmVhcmVyQXV0aDoge1xuLy8gICAgICAgICAgIHR5cGU6IFwiaHR0cFwiLFxuLy8gICAgICAgICAgIHNjaGVtZTogXCJiZWFyZXJcIixcbi8vICAgICAgICAgICBiZWFyZXJGb3JtYXQ6IFwiSldUXCIsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIGFwaXM6IFtcIi4vcm91dGVycy8qLmpzXCJdLFxuLy8gICBzZWN1cml0eTogW3sgYmVhcmVyQXV0aDogW10gfV0sXG4vLyB9O1xuXG4vLyBjb25zdCBzcGVjcyA9IHN3YWdnZXJKU0RvYyhvcHRpb25zKTtcblxuLy8gYXBwLnVzZShcbi8vICAgXCIvYXBpLWRvY3NcIixcbi8vICAgc3dhZ2dlclVJLnNlcnZlLFxuLy8gICBzd2FnZ2VyVUkuc2V0dXAob3B0aW9ucywgeyBleHBsb3JlcjogdHJ1ZSB9KVxuLy8gKTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShyb3V0ZXMpO1xuXG5hcHAubGlzdGVuKFBPUlQsIGNvbnNvbGUubG9nKGBTZXJ2ZXIgTGlzdGVuaW5nIG9uICR7UE9SVH1gKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsS0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksT0FBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUssTUFBQSxHQUFBTixzQkFBQSxDQUFBQyxPQUFBO0FBQXFDLFNBQUFELHVCQUFBTyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFFckNFLGtCQUFNLENBQUNDLE1BQU0sRUFBRTtBQUVmLElBQU1DLEdBQUcsR0FBRyxJQUFBQyxtQkFBTyxHQUFFO0FBRXJCLElBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUYsR0FBRyxDQUFDSyxHQUFHLENBQUNKLG1CQUFPLENBQUNLLElBQUksRUFBRSxDQUFDO0FBQ3ZCTixHQUFHLENBQUNLLEdBQUcsQ0FBQ0Usc0JBQVUsQ0FBQ0MsVUFBVSxDQUFDO0VBQUVDLFFBQVEsRUFBRTtBQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25EVCxHQUFHLENBQUNLLEdBQUcsQ0FBQyxJQUFBSyxrQkFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCVixHQUFHLENBQUNLLEdBQUcsQ0FBQyxJQUFBTSxnQkFBSSxHQUFFLENBQUM7QUFDZlgsR0FBRyxDQUFDSyxHQUFHLENBQUNPLGlCQUFNLENBQUM7QUFFZlosR0FBRyxDQUFDYSxNQUFNLENBQUNYLElBQUksRUFBRVksT0FBTyxDQUFDQyxHQUFHLHdCQUFBQyxNQUFBLENBQXdCZCxJQUFJLEVBQUcsQ0FBQztBQUFDLElBQUFlLFFBQUEsR0FFOUNqQixHQUFHO0FBQUFrQixPQUFBLGNBQUFELFFBQUEifQ==