const jwt = require("jsonwebtoken");

const checkJwt = (req, res, next)=> {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send({message:"Access Denied"});
    const decoded = jwt.verify(token, "mypassword");
    req.user_id = decoded._id;
    req.user_type = decoded.user_type;
    next();
  } catch (ex) {
    res.status(400).send({ message: "invalid token" });
  }
};

module.exports.checkJwt = checkJwt;