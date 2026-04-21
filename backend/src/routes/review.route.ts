import { Router } from "express";
import { createReview, updateReview } from "../controller/review.controller.js";

const reviewRouter: Router = Router();

//create review route
reviewRouter.post("/product/:id/review", createReview);

//update review route
reviewRouter.put("/product/:id/review", updateReview);

export default reviewRouter;