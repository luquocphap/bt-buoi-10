import { responseSuccess } from "../common/helpers/reponse.helper.js";
import { statusCodes } from "../common/helpers/status-code.helper.js";
import { ratingService } from "../services/rating.service.js";

export const ratingController = {
    async rate(req, res, next){
        const data = await ratingService.rate(req);
        const response = responseSuccess(data, "rate thành công");
        res.status(statusCodes.CREATED).json(response);
    },

    async getRating(req, res, next){
        const data = await ratingService.getRating(req);
        const response = responseSuccess(data, "Lấy Rating thành công");
        res.status(statusCodes.OK).json(response)
    }
}