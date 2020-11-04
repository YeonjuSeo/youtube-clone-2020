// index.js
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Example app listening on port ${PORT}!`);
//Looking Middleware
const betweenHome = (req, res, next) => {
  console.log("중간에 있어요!");
  next();
};
const handleHome = (req, res) => res.send("홈 화면입니다!!ㅎㅎ");
const handleProfile = (req, res) => res.send("프로필 화면입니다.");

//어떤 루트로 들어오든 미들웨어가 실행되도록 하려면
//위에서 아래로 차례로 함수들이 실행되도록
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(helmet()));
app.listen(PORT, handleListening);
app.get("/", handleHome);
app.get("/profile", handleProfile);
