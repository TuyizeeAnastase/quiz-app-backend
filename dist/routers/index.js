"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.routers"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOptions = _interopRequireDefault(require("../util/swaggerOptions"));
var _welcome = _interopRequireDefault(require("./welcome.routers"));
var _quiz = _interopRequireDefault(require("./quiz.routers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var swaggerDoc = (0, _swaggerJsdoc["default"])(_swaggerOptions["default"]);
var routes = (0, _express["default"])();
routes.use("/", _welcome["default"]);
routes.use("/api/v1/user", _user["default"]);
routes.use("/api/v1/quiz", _quiz["default"]);
routes.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerDoc));
routes.get("*", function (req, res) {
  res.status(404).json({
    message: "Page not found, try again"
  });
});
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3VzZXIiLCJfc3dhZ2dlckpzZG9jIiwiX3N3YWdnZXJVaUV4cHJlc3MiLCJfc3dhZ2dlck9wdGlvbnMiLCJfd2VsY29tZSIsIl9xdWl6Iiwib2JqIiwiX19lc01vZHVsZSIsInN3YWdnZXJEb2MiLCJzd2FnZ2VySnNkb2MiLCJzd2FnZ2VyT3B0aW9ucyIsInJvdXRlcyIsImV4cHJlc3MiLCJ1c2UiLCJ3ZWxjb21lUm91dGUiLCJ1c2VyUm91dGUiLCJxdWl6Um91dGUiLCJzd2FnZ2VyVUkiLCJzZXJ2ZSIsInNldHVwIiwiZ2V0IiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVycy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHVzZXJSb3V0ZSBmcm9tIFwiLi91c2VyLnJvdXRlcnNcIjtcbmltcG9ydCBzd2FnZ2VySnNkb2MgZnJvbSBcInN3YWdnZXItanNkb2NcIjtcbmltcG9ydCBzd2FnZ2VyVUkgZnJvbSBcInN3YWdnZXItdWktZXhwcmVzc1wiO1xuaW1wb3J0IHN3YWdnZXJPcHRpb25zIGZyb20gXCIuLi91dGlsL3N3YWdnZXJPcHRpb25zXCI7XG5pbXBvcnQgd2VsY29tZVJvdXRlIGZyb20gXCIuL3dlbGNvbWUucm91dGVyc1wiO1xuaW1wb3J0IHF1aXpSb3V0ZSBmcm9tIFwiLi9xdWl6LnJvdXRlcnNcIjtcblxuY29uc3Qgc3dhZ2dlckRvYyA9IHN3YWdnZXJKc2RvYyhzd2FnZ2VyT3B0aW9ucyk7XG5jb25zdCByb3V0ZXMgPSBleHByZXNzKCk7XG5cbnJvdXRlcy51c2UoXCIvXCIsIHdlbGNvbWVSb3V0ZSk7XG5cbnJvdXRlcy51c2UoXCIvYXBpL3YxL3VzZXJcIiwgdXNlclJvdXRlKTtcbnJvdXRlcy51c2UoXCIvYXBpL3YxL3F1aXpcIiwgcXVpelJvdXRlKTtcblxucm91dGVzLnVzZShcIi9hcGktZG9jc1wiLCBzd2FnZ2VyVUkuc2VydmUsIHN3YWdnZXJVSS5zZXR1cChzd2FnZ2VyRG9jKSk7XG5cbnJvdXRlcy5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgbWVzc2FnZTogXCJQYWdlIG5vdCBmb3VuZCwgdHJ5IGFnYWluXCIsXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsYUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsaUJBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLGVBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFLLFFBQUEsR0FBQU4sc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFNLEtBQUEsR0FBQVAsc0JBQUEsQ0FBQUMsT0FBQTtBQUF1QyxTQUFBRCx1QkFBQVEsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRXZDLElBQU1FLFVBQVUsR0FBRyxJQUFBQyx3QkFBWSxFQUFDQywwQkFBYyxDQUFDO0FBQy9DLElBQU1DLE1BQU0sR0FBRyxJQUFBQyxtQkFBTyxHQUFFO0FBRXhCRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUVDLG1CQUFZLENBQUM7QUFFN0JILE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGNBQWMsRUFBRUUsZ0JBQVMsQ0FBQztBQUNyQ0osTUFBTSxDQUFDRSxHQUFHLENBQUMsY0FBYyxFQUFFRyxnQkFBUyxDQUFDO0FBRXJDTCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxXQUFXLEVBQUVJLDRCQUFTLENBQUNDLEtBQUssRUFBRUQsNEJBQVMsQ0FBQ0UsS0FBSyxDQUFDWCxVQUFVLENBQUMsQ0FBQztBQUVyRUcsTUFBTSxDQUFDUyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFLO0VBQzVCQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ25CQyxPQUFPLEVBQUU7RUFDWCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRVlmLE1BQU07QUFBQWdCLE9BQUEsY0FBQUQsUUFBQSJ9