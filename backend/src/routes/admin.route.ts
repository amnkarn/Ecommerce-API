import { Router } from "express";
import { 
    deleteUser, 
    getAllUsers, 
    loginAdmin, 
    registerAdmin, 
    stats 
} from "../controller/admin.controller.js";

const adminRouter: Router = Router();


//register admin route
adminRouter.post("/register", registerAdmin);

//login admin route
adminRouter.post("/login", loginAdmin);

//get all users route
adminRouter.get("/users", getAllUsers);

//delete on specific route
adminRouter.delete("/users/:id", deleteUser);

//get stats of orders route
adminRouter.get("/stats", stats);

export default adminRouter;