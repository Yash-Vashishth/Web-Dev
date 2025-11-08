const api = require("../utils/api");

module.exports.createReview = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.user.id;
        const { comment, rating } = req.body;

        const review = await Review.create({ comment, rating, productId, userId });
        api.success(res, review);
    } catch (error) {
        api.error(res,error.message,"Something went wrong in creating review")
    }
}

module.exports.updateReview = async (req, res) => {
    
}

module.exports.deleteReview = async (req, res) => {
    
}

module.exports.findAllReview = async (req, res) => {
    
}