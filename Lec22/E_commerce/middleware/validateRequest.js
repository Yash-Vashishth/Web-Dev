const joi = require("joi");
const createProductSchema = require("../schema/products/create.schema");
const api=require("../utils/api")

module.exports.validateCreateProduct = (req, res, next) => {
    const [error, value] = createProductSchema.validate(req.body,{abortEarly:false});

    if (error) {
        return api.error(res,error,"Validation failed",400) // frontend input error -400
    }
}