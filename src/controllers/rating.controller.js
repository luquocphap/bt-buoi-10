export const ratingController = {
    async rate(req, res, next){
        const response = {
            message: "rate"
        }
        res.status(200).json(response);
    }
}