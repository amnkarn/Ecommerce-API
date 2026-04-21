import { Router } from "express";
import { 
    createProduct, 
    deleteProduct, 
    getAllProduct, 
    getProduct, 
    getProductByCategory, 
    updateProduct 
} from "../controller/product.controller.js";

const productRouter: Router = Router();


//get all product route
productRouter.get("/", getAllProduct);

//filter product route
productRouter.get("/category/:category", getProductByCategory);

//create product route
productRouter.post("/", createProduct);

//get single product route
productRouter.get("/:id", getProduct);

//update product route
productRouter.put("/:id", updateProduct);

// delete product route
productRouter.delete("/:id", deleteProduct);

export default productRouter;