import { Router } from "express";
import userRouter from "./user.route.js";
import adminRouter from "./admin.route.js";
import productRouter from "./product.route.js";

const indexRouter: Router = Router();

indexRouter.use("/user", userRouter);

indexRouter.use("/admin", adminRouter);

indexRouter.use("/product", productRouter);

export default indexRouter;