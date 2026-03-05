import { response } from "express";
import { likeService } from "../services/like.service.js";
import { responseSuccess } from "../common/helpers/reponse.helper.js";

export const likeController = {
    async like(req, res, next){
        const data = await likeService.like(req);
        const response = responseSuccess(data, "Response thành công")
        return res.status(200).json(response);
    }
}