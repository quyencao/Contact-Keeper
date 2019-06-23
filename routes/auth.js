const express = require("express");
const router = express.Router();

// @route   GET /api/auth
// @desc    Get Logged In User
// @access  Private
router.get("/", (req, res, next) => {
  res.send("Get Logged In User");
});

// @route   POST /api/auth
// @desc    Log In User & Get Token
// @access  Public
router.post("/", (req, res, next) => {
  res.send("Log In User & Get Token");
});

module.exports = router;
