const { User } = require("../models");
module.exports = class Controller {
  static async register(req, res) {
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
      res.status(500).json({ message: "internal server error" });
    }
  }
};
