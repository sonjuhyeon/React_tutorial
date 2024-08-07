const { Pool } = require("pg");
require("dotenv").config(); // env 파일 사용

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = { pool };
