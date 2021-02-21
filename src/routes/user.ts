import { Router } from "express";
import * as usercontrollers from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", usercontrollers.getAllUsers);
userRoutes.post("/", usercontrollers.signup);

export default userRoutes;
