const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } else {
      res.status(401);

      throw new Error("Not Authorized, No Token");
    }
  } catch (error) {
    res.status(401).json({
      message: "Not Authorized",
    });
  }
};

module.exports = {
  protect,
};
