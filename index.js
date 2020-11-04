// index.js
import express from "express";
const app = express();
const PORT = 4000;

function handleListening() {
  console.log(`Example app listening on port ${PORT}!`);
}

function handleHome(req, res) {
  // 누가 어떤 페이지를 요청했는지, 어떤 종류의 데이터가 페이지로 전송됐는지 확인하려면 request object
  console.log(req);
  //응답할 내용을 설정할 땐 response object
  res.send("홈 화면입니다.");
}

function handleProfile(req, res) {
  console.log(req);
  res.send("프로필 화면입니다.");
}

app.listen(PORT, handleListening);
app.get("/", handleHome);
app.get("/profile", handleProfile);
