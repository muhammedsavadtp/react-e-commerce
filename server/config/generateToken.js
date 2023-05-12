const jwt = require("jsonwebtoken");

function generateToken(payload, expiresIn) {
  const tokenKey = process.env.TOKEN_KEY;
  const token = jwt.sign(payload, tokenKey, { expiresIn });
  return token;
}

module.exports = generateToken;