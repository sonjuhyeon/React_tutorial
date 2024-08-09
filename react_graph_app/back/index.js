const PORT = 8081;
const express = require("express"); // api 설정
const cors = require("cors"); // http 통신을 위한 cors 설정
const database = require("./services/database"); // DB 설정

const app = express();
app.use(cors());
app.use(express.json());

// request를 보내면 response를 받아서 실행
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/visitors", async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM visitors");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/customers", async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM customers");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/revenue", async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM revenue");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/sales_map", async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM sales_map");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
