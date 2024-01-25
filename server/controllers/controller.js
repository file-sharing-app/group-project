const { comparePassword } = require("../helpers/bcrypt");
const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");

module.exports = class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const register = await User.create({
        email,
        name,
        password,
      });

      res.status(201).json({
        message: "create user done",
        id: register.id,
        email: register.email,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "EmailEmpty" };
      }
      if (!password) {
        throw { name: "PasswordEmpty" };
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw { name: "InvalidLogin" };
      }

      const isPasswordValid = comparePassword(password, user.password);

      if (!isPasswordValid) {
        throw { name: "InvalidLogin" };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };
      const access_token = generateToken(payload);
      res.status(200).json({access_token});
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
