const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.json({ msg: "Welcome to Contact Keeper Api..." });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
