const User = require("../models/user.model");
const api = require("../utils/api");
const jwt= require("jsonwebtoken")

module.exports.register = async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return api.error(res,"Error","User dows exist ",400)
        }

        const hash = await bcrypt.hash(password, process.env.SALT_ROUNDS);
        
        const user = User.create({ name, enail, role, password: hash });
        api.success(res, null, "User registration succesful", 201);
    } catch (error) {
        api.error(res,error.message,"Something went wrong in creatng user")        
    }
}
module.exports.login = async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return api.error(res,"Error","User dows exist ",400)
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return api.error(res, "Error", "User dows exist ", 400);

        const token = jwt.sign({
            id: user.id,
            role: user.role
        }, process.env.JWT_SECRET);

        api.success(res, { token }, "User logged in Successfully");
    } catch (error) {
         
    }
}