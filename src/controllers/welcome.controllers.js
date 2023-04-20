export class WelcomeController {
  async welcome(req, res) {
    res.status(200).json({
      message: "Welcome to QUIZ APP BACKEND",
    });
  }
}
const welcomeController = new WelcomeController();
export default welcomeController;
