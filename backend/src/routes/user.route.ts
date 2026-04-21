import { Router } from "express";
import { getUser, loginUser, logoutAllUser, logoutUser, refreshToken, registerUser } from "../controller/user.controller.js";
import auth from "../middlewares/auth.js";

const userRouter: Router = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/get-me", auth, getUser);

userRouter.get("/refresh-token", refreshToken);

userRouter.get("/logout", logoutUser);

userRouter.get("/logout-all", logoutAllUser);

export default userRouter;