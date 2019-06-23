const express = require("express");
const router = express.Router();

// @route   POST /api/users
// @desc    Register User
// @access  Public
router.post("/", (req, res, next) => {
  res.send("Register a user");
});

module.exports = router;
