import { prisma } from "../prisma/connect.prisma.js"

export const validate = {
    async validateUser(id){
        const existingUser = await prisma.users.findUnique({
            where: {
                id: id
            }
        })

        if (existingUser) return true;

        return false;
    },

    async validateRestaurant(id){
        const existingRes = await prisma.restaurants.findUnique({
            where: {
                id: id
            }
        })

        if (existingRes) return true;

        return false;
    }
}