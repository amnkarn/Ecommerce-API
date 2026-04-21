import { Router } from "express";
import { addInCart, removeFromCart, seeCart } from "../controller/cart.controller.js";

const cartRouter: Router = Router();

//add in cart route
cartRouter.post("/", addInCart);

//see cart route
cartRouter.get("/", seeCart);

//remove item from cart
cartRouter.delete("/:id", removeFromCart);


export default cartRouter;