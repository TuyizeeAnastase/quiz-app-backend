import { createUser, getUserById } from "../services/user.services";
import bcrypt from "bcryptjs";
import { getToken } from "../util/token";

export class UserControllers {
  async registerUser(req, res) {
    try {
      const { username, email, password, confirm_password } = req.body;
      if (password != confirm_password) {
        return res.status(500).json({
          message: "Confirm password is different with password",
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const newUser = {
        username,
        email,
        password: hashedPassword,
        role_id: 2,
      };
      const user = await createUser(newUser);
      return res.status(201).json({
        message: `USer created successfully under ${username} username`,
        user: { ...user.dataValues, password: "" },
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while registering user",
        error: err.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { password } = req.body;
      const user = req.user;
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({
          message: "Password does not match",
        });
      }
      const token = getToken({ id: user.id });
      return res.status(200).json({
        token: token,
        user: {
          user_id: user.id,
          username: user.username,
          email: user.email,
          role: user.role.title,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Error occured while logged in, try Again",
        error: error.message,
      });
    }
  }
}

const userController = new UserControllers();

export default userController;
