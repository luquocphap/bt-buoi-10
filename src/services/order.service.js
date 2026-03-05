import { BadRequestException } from "../common/helpers/exception.helper.js";
import { generateOrderCode } from "../common/helpers/generater.helper.js";
import { validate } from "../common/helpers/validate.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const orderSevice = {
    async order(req){
        
        const { user_id, food_id, amount } = req.body;

        if (!(await validate.isExistingUser(parseInt(user_id)))){
            throw new BadRequestException(`User ${user_id} do not exist`)
        }

        if (!(await validate.isExistingFood(parseInt(food_id)))){
            throw new BadRequestException(`Food ${food_id} do not exist`)
        }

        const sub_foods = await prisma.sub_foods.findMany({
            where: {
                food_id: parseInt(food_id)
            }
        })

        const arr_sub_id = sub_foods.map((sub_food) => sub_food.id).join(" ");

        const newOrder = await prisma.orders.create({
            data: {
                user_id: parseInt(user_id),
                food_id: parseInt(food_id),
                amount: amount,
                arr_sub_id: arr_sub_id
            }
        })

        await prisma.orders.update({
            where: {
                id: newOrder.id
            },
            data: {
                code: generateOrderCode(newOrder.id)
            }
        })

        return true
    }
}