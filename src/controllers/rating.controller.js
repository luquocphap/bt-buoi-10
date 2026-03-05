import { responseSuccess } from "../common/helpers/reponse.helper.js";
import { ratingService } from "../services/rating.service.js";

export const ratingController = {
    async rate(req, res, next){
        const data = await ratingService.rate(req);
        const response = responseSuccess(data, "rate thành công");
        res.status(200).json(response);
    }
}