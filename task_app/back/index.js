const express = require("express"); // express 모듈 불러오기
const cors = require("cors"); // cors 모듈 불러오기
const PORT = "8080";

const app = express(); // express 모듈을 사용하기 위해 app 변수에 할당

// const corsOptions = {
//   origin: "http://localhost:3000", // 허용할 주소
//   credentials: true, // 인증 정보 허용
// };

// const corsOption2 = ["http://localhost:3000", "http://localhost:3001"];

app.use(cors()); // http, https 프로토콜을 사용하는 서버간의 통신을 허용
app.use(express.json()); // express 모듈의 json() 메소드를 사용

app.get("/", (request, response) => {
  response.send("Hello World");
});

// app.get("/get_tasks", async (req, res) => {
//   try {
//     const result = await database.query("SELECT * FROM task");
//     return res.status(200).json(result.rows);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

app.use(require("./routes/getRoutes"));

app.listen(PORT, () => console.log(`server is running on ${PORT}`)); // 서버실행 메세지
