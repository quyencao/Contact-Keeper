const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

// @route   POST /api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("name", "Please enter name")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(req.body);
  }
);

module.exports = router;
