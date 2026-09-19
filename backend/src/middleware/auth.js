const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  const token = req.cookies.token || bearerToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId };
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
