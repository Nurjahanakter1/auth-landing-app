const express = require("express");
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth");
const { register, login, me, logout } = require("../controllers/authController");

const router = express.Router();

router.post(
  "/register",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  register,
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login,
);

router.get("/me", authMiddleware, me);
router.post("/logout", logout);

module.exports = router;
