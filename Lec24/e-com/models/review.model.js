const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    comment: String,
    rating: {
        type: Number,
        required: true,
        min: 1,
        max:5
    },
    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    }
})

module.exports.review = mongoose.model("Review", reviewSchema);