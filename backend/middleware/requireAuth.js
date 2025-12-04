const { verifyToken } = require("../utils/auth");
const UserModel = require("../model/UserModel");

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    const [, token] = authHeader.split(" ");

    if (!token) {
      return res.status(401).json({ message: "Missing or invalid authorization header." });
    }

    const decoded = verifyToken(token);
    const user = await UserModel.findById(decoded.sub).select("-passwordHash");

    if (!user) {
      return res.status(401).json({ message: "User no longer exists." });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    res.status(401).json({ message: "Unauthorized." });
  }
}

module.exports = requireAuth;