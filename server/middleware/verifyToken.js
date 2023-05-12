const jwt = require("jsonwebtoken");

const config = process.env;

// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token ||
//     req.query.token ||
//     req.params.token ||
//     req.headers["x-access-token"];
// console.log(token);
//   if (!token) {
//     return res.status(403).json("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).json("Invalid Token");
//   }
//   return next();
// };
const verifyToken = async(req, res,next) => {
  try {
    const token =  req.body;  // Get token from Authorization header
    const decodedToken = jwt.verify(token, config.TOKEN_KEY); // Verify the token
    const userData =await decodedToken.userData; // Get user data from the decoded token
    // Do any additional validation on the user data here
    console.log(userData);
    // res.json(userData); // Send the user data back in the response
  } catch (error) {
    res.status(401).json("Invalid token"); // Send an error response if the token is invalid
  }
  return next();
};

module.exports = verifyToken;
