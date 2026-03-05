export const likeController = {
    async like(req, res, next){
        const response = {
            message: "like"
        }
        return res.status(200).json(response);
    }
}