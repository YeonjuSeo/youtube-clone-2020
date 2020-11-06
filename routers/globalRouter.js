import express from "express";
import routes from "../routes"; //.은 자신을 ..는 부모 디렉토리를 뜻한다.
import { join, login, logout } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Home Screen"));
globalRouter.get(routes.join, (req, res) => res.send("Join Screen"));
globalRouter.get(routes.login, (req, res) => res.send("Login Screen"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout Screen"));
globalRouter.get(routes.search, (req, res) => res.send("Search Screen"));

export default globalRouter;
