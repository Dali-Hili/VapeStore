const Joi = require("@hapi/joi");

//signUp validation 

const signupValidation = data => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data,schema)
}

const loginValidation = data => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema)
}

module.exports.signupValidation = signupValidation
module.exports.loginValidation = loginValidation