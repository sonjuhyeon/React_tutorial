const database = require("../database/database");
const bcrypt = require("bcrypt");
const salt = 10;

exports.postUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, salt);
    const values = [req.body.name, req.body.email, hash];

    await database.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      values
    );

    return res.status(201).json({ message: "Account created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.loginUser = async (req, res) => {};
