import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/product.controller.js";

const productRouter: Router = Router();

//create product route
productRouter.post("/product", createProduct);

//get product route
productRouter.get("/product/:id", getProduct);

// delete product route
productRouter.delete("/product", deleteProduct);

//update product route
productRouter.put("/product/:id", updateProduct);


export default productRouter;