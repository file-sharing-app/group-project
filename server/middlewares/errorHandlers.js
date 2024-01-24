const errHandle = (err, req, res, next) => {
    switch (err.name) {
      case "SequelizeValidationError":
      case "SequelizeUniqueConstraintError":
        res.status(400).json({ message: err.errors[0].message });
        break;
      case "EmailEmpty":
        res.status(400).json({ message: "Email Is Required" });
        break;
      case "PasswordEmpty":
        res.status(400).json({ message: "Password Is Required" });
        break;
      case "InvalidLogin":
        res.status(401).json({ message: "Wrong Email/Password" });
        break;
      case "NotFound":
        res.status(400).json({ message: "Data Not Found" });
        break;
      case "Unauthorized":
      case "JsonWebTokenError":
        res.status(401).json({ message: "Invalid Token" });
        break;  
      default:
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
        break;
    }
  };
  module.exports = errHandle;
  