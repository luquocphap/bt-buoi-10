export const orderController = {
    async order(req, res, next){
        const response = {
            message: "order"
        }
        res.status(200).json(response);
    }
}