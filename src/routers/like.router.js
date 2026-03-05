import express from "express";
import { likeController } from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.post("/", likeController.like);

export default likeRouter;