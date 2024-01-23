const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  jwtSign: (payload) => jwt.sign(payload, SECRET),
  jwtVerify: (token) => jwt.verify(token, SECRET),
};
