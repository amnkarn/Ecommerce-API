import { Router } from "express";
import { myOrder, orderCheckout, orderDetails } from "../controller/order.controller.js";

const orderRouter: Router = Router();

//order checkout route
orderRouter.post("/checkout", orderCheckout);

//see order route
orderRouter.get("/my-orders", myOrder);

//order details route
orderRouter.get("/:id", orderDetails);

export default orderRouter;