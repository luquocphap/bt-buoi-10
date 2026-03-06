import { response } from "express";
import { likeService } from "../services/like.service.js";
import { responseSuccess } from "../common/helpers/reponse.helper.js";
import { statusCodes } from "../common/helpers/status-code.helper.js";

export const likeController = {
    async like(req, res, next){
        const data = await likeService.like(req);
        const response = responseSuccess(data, "Response thành công")
        return res.status(statusCodes.CREATED).json(response);
    },

    async getLike(req, res, next){
        const data = await likeService.getLike(req);
        const response = responseSuccess(data, "Lấy Like thành công");
        return res.status(statusCodes.OK).json(response)
    }
}