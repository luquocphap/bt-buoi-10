import { prisma } from "../prisma/connect.prisma.js"

export const validate = {
    async isExistingUser(id){
        const existingUser = await prisma.users.findUnique({
            where: {
                id: id
            }
        })

        if (existingUser) return true;

        return false;
    },

    async isExistingRestaurant(id){
        const existingRes = await prisma.restaurants.findUnique({
            where: {
                id: id
            }
        })

        if (existingRes) return true;

        return false;
    },

    async isExistingRating(user_id, res_id){
        const existingRating = await prisma.rate_res.findFirst({
            where: {
                user_id: parseInt(user_id),
                res_id: parseInt(res_id)
            }
        })

        if (existingRating) return true

        return false
    },

    async isExistingFood(id){
        const existingFood = await prisma.foods.findUnique({
            where: {
                id: id
            }
        })

        if (existingFood) return true;

        return false
    }
}