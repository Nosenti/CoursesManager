const Joi = require('@hapi/joi');

const courseValiation = Joi.object({
    name: Joi.string().min(4).required(),
    content: Joi.string().min(50).max(10000).required(),
    genre: Joi.string().min(10).max(50).required(),

});
module.exports = { courseValiation }

//const Joi = require('joi');


//export function courseValidate(req, res, next) {
// function courseValidate(req, res, next) {
//     const courseValiation = Joi.object({
//         name: Joi.string().min(4).required(),
//         content: Joi.string().min(50).max(10000).required(),
//         genre: Joi.string().min(10).max(50).required()

//     });
//     const result = courseValiation.validate(req.body);
//     if (result.error) return res.status(400).json({ Message: result.error.details[0].message });
//     next();
// }
// module.exports = courseValidate;