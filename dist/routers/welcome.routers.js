"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _welcome = _interopRequireDefault(require("../controllers/welcome.controllers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

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

router.get("/", _welcome["default"].welcome);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3dlbGNvbWUiLCJvYmoiLCJfX2VzTW9kdWxlIiwicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsIndlbGNvbWVDb250cm9sbGVyIiwid2VsY29tZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXJzL3dlbGNvbWUucm91dGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHdlbGNvbWVDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy93ZWxjb21lLmNvbnRyb2xsZXJzXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qKlxuICogQHN3YWdnZXJcbiAqIC86XG4gKiAgIGdldDpcbiAqICAgICB0YWdzOlxuICogICAgICAgLSB3ZWxjb21lIG1lc3NhZ2VcbiAqICAgICBzdW1tYXJ5OiB3ZWxjb21lIHRvIFF1aXogYXBwXG4gKiAgICAgZGVzY3JpcHRpb246IERpc3BsYXkgd2VsY29tZSBtZXNzYWdlXG4gKiAgICAgcHJvZHVjZXM6XG4gKiAgICAgICAtIGFwcGxpY2F0aW9uL2pzb25cbiAqICAgICBjb25zdW1lczpcbiAqICAgICAgIC0gYXBwbGljYXRpb24vanNvblxuICogICAgIHJlc3BvbnNlczpcbiAqICAgICAgICcyMDAnOlxuICogICAgICAgICAgICAgZGVzY3JpcHRpb246IFdlbGNvbWUgdG8gcGhhbnRvbSwgYSBwbGF0Zm9ybSB0byBmYWNpbGl0YXRlIHRoZSB0cmFuc3BvcnRhdGlvbiBtb2RlIGluIHRvd24hLlxuICogKi9cblxucm91dGVyLmdldChcIi9cIiwgd2VsY29tZUNvbnRyb2xsZXIud2VsY29tZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQW1FLFNBQUFELHVCQUFBRyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFFbkUsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDQyxNQUFNLEVBQUU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRixNQUFNLENBQUNHLEdBQUcsQ0FBQyxHQUFHLEVBQUVDLG1CQUFpQixDQUFDQyxPQUFPLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRTVCTixNQUFNO0FBQUFPLE9BQUEsY0FBQUQsUUFBQSJ9