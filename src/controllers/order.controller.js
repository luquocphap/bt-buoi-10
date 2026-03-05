import { responseSuccess } from "../common/helpers/reponse.helper.js";
import { orderSevice } from "../services/order.service.js";

export const orderController = {
    async order(req, res, next){
        const data = await orderSevice.order(req);
        const response = responseSuccess(data, "Order thành công");
        res.status(200).json(response);
    }
}