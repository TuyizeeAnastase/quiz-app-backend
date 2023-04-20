import { User, Role } from "../database/models";
import { Op } from "sequelize";

export const checkUserExist = async (req, res, next) => {
  const { username, email } = req.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: username.toLowerCase() }, { email }],
    },
  });
  if (user) {
    res.status(404).json({
      message: "User already exist",
    });
    return false;
  }
  next();
};

export const checkUserExistLogin = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({
    where: {
      username: username.toLowerCase(),
    },
    include: [
      {
        model: Role,
        as: "role",
      },
    ],
  });
  if (!user) {
    res.status(404).json({
      message: "User Doesn't exist, Register to login",
    });
    return false;
  }
  req.user = user;
  next();
};
