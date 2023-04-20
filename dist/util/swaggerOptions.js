"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Quiz",
      version: "1.0.0",
      license: {},
      contact: {}
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    servers: [{
      url: "http://localhost:4500"
    }, {
      url: 'https://quiz-jahk.onrender.com'
    }]
  },
  apis: [_path["default"].resolve(__dirname, "../routers/*.js")],
  security: [{
    bearerAuth: []
  }]
};
var _default = swaggerOptions;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsInN3YWdnZXJPcHRpb25zIiwic3dhZ2dlckRlZmluaXRpb24iLCJvcGVuYXBpIiwiaW5mbyIsInRpdGxlIiwidmVyc2lvbiIsImxpY2Vuc2UiLCJjb250YWN0IiwiY29tcG9uZW50cyIsInNlY3VyaXR5U2NoZW1lcyIsImJlYXJlckF1dGgiLCJ0eXBlIiwic2NoZW1lIiwiYmVhcmVyRm9ybWF0Iiwic2VydmVycyIsInVybCIsImFwaXMiLCJwYXRoIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsInNlY3VyaXR5IiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvc3dhZ2dlck9wdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3Qgc3dhZ2dlck9wdGlvbnMgPSB7XG4gIHN3YWdnZXJEZWZpbml0aW9uOiB7XG4gICAgb3BlbmFwaTogXCIzLjAuMFwiLFxuICAgIGluZm86IHtcbiAgICAgIHRpdGxlOiBcIlF1aXpcIixcbiAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICAgIGxpY2Vuc2U6IHt9LFxuICAgICAgY29udGFjdDoge30sXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBzZWN1cml0eVNjaGVtZXM6IHtcbiAgICAgICAgYmVhcmVyQXV0aDoge1xuICAgICAgICAgIHR5cGU6IFwiaHR0cFwiLFxuICAgICAgICAgIHNjaGVtZTogXCJiZWFyZXJcIixcbiAgICAgICAgICBiZWFyZXJGb3JtYXQ6IFwiSldUXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyczogW1xuICAgICAgeyB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0NTAwXCIgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9xdWl6LWphaGsub25yZW5kZXIuY29tJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYXBpczogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcm91dGVycy8qLmpzXCIpXSxcbiAgc2VjdXJpdHk6IFt7IGJlYXJlckF1dGg6IFtdIH1dLFxufTtcbmV4cG9ydCBkZWZhdWx0IHN3YWdnZXJPcHRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxLQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBd0IsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUV4QixJQUFNRSxjQUFjLEdBQUc7RUFDckJDLGlCQUFpQixFQUFFO0lBQ2pCQyxPQUFPLEVBQUUsT0FBTztJQUNoQkMsSUFBSSxFQUFFO01BQ0pDLEtBQUssRUFBRSxNQUFNO01BQ2JDLE9BQU8sRUFBRSxPQUFPO01BQ2hCQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO01BQ1hDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNEQyxVQUFVLEVBQUU7TUFDVkMsZUFBZSxFQUFFO1FBQ2ZDLFVBQVUsRUFBRTtVQUNWQyxJQUFJLEVBQUUsTUFBTTtVQUNaQyxNQUFNLEVBQUUsUUFBUTtVQUNoQkMsWUFBWSxFQUFFO1FBQ2hCO01BQ0Y7SUFDRixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUNQO01BQUVDLEdBQUcsRUFBRTtJQUF3QixDQUFDLEVBQ2hDO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUM7RUFFTCxDQUFDO0VBQ0RDLElBQUksRUFBRSxDQUFDQyxnQkFBSSxDQUFDQyxPQUFPLENBQUNDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0VBQ2xEQyxRQUFRLEVBQUUsQ0FBQztJQUFFVixVQUFVLEVBQUU7RUFBRyxDQUFDO0FBQy9CLENBQUM7QUFBQyxJQUFBVyxRQUFBLEdBQ2FyQixjQUFjO0FBQUFzQixPQUFBLGNBQUFELFFBQUEifQ==