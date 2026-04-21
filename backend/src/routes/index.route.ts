import { Router } from "express";
import userRouter from "./user.route.js";
import adminRouter from "./admin.route.js";
import productRouter from "./product.route.js";
import cartRouter from "./cart.route.js";
import orderRouter from "./order.route.js";

const indexRouter: Router = Router();

indexRouter.use("/user", userRouter);

indexRouter.use("/admin", adminRouter);

indexRouter.use("/products", productRouter);

indexRouter.use("/cart", cartRouter);

indexRouter.use("/orders", orderRouter);

export default indexRouter;