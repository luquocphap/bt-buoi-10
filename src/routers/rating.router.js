import express from "express";
import { ratingController } from "../controllers/rating.controller.js";

const ratingRouter = express.Router();

ratingRouter.post("/", ratingController.rate);
ratingRouter.get("/:id", ratingController.getRating);

export default ratingRouter;