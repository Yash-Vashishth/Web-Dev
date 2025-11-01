const joi = require("joi");

module.exports.createProductSchema = Joi.object({
    name: Joi.string().required().trim(),
    price: Joi.number().required(),
    description: Joi.string().required()
})