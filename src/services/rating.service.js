import { parse } from "dotenv";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { validate } from "../common/helpers/validate.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const ratingService = {
    async rate(req){
        const { user_id, res_id, amount } = req.body;

        if (!(await validate.isExistingRestaurant(parseInt(res_id)))){
            throw new BadRequestException(`Restaurant ${res_id} do not exist`);
        }

        if (!(await validate.isExistingUser(parseInt(user_id)))){
            throw new BadRequestException(`User ${user_id} do not exist`);
        }

        if ((await validate.isExistingRating(parseInt(user_id), parseInt(res_id)))){
            throw new BadRequestException("User rated this restaurant");
        }

        const newRating = await prisma.rate_res.create({
            data: {
                user_id: parseInt(user_id),
                res_id: parseInt(res_id),
                amount: parseInt(amount),
                date_rate: new Date()
            }
        })

        return true
    },

    async getRating(req){
        const { id } = req.params;
        
        const getRating = await prisma.rate_res.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return {
            Rating: getRating
        }
    }
}