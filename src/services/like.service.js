import { BadRequestException } from "../common/helpers/exception.helper.js";
import { validate } from "../common/helpers/validate.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const likeService = {
    async like(req){
        const { user_id, res_id } = req.body;

        if (!validate.isExistingUser(parseInt(user_id))){
            throw new BadRequestException(`User ${user_id} do not exists`)
        }

        if (!validate.isExistingRestaurant(parseInt(res_id))){
            throw new BadRequestException(`Restaurant ${res_id} do not exists`)
        }

        const existingLike = await prisma.like_res.findFirst({
            where: {
                user_id: parseInt(user_id),
                res_id: parseInt(res_id)
            }
        })

        if (!existingLike){
            const newLike = await prisma.like_res.create({
                data:{
                    user_id: parseInt(user_id),
                    res_id: parseInt(res_id),
                    date_like: new Date()
                }
            })
        } else {
            if (existingLike.isDeleted == false){
                const updatedLike = await prisma.like_res.update({
                    where: {
                        id: existingLike.id
                    },
                    data: {
                        isDeleted: true,
                        deletedAt: new Date(),
                    }
                })
            } else {
                const updatedLike = await prisma.like_res.update({
                    where: {
                        id: existingLike.id
                    },
                    data: {
                        isDeleted: false
                    }
                })
            }
        }

        return true
        
    }
}