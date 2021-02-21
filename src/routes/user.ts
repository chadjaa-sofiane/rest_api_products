import { Router } from "express";
import * as usercontrollers from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", usercontrollers.getAllUsers);
userRoutes.post("/S", usercontrollers.signup);
userRoutes.post("/L", usercontrollers.login);

export default userRoutes;
