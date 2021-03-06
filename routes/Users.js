const express = require("express");
const router = express.Router();
const User = require("../modules/userModel");

//@ route POST api/users
//@ description Create users
//@ access Public

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        msg: "User all ready exists",
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    res.status(201).json(payload);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
