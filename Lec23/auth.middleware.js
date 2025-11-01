//two method of auth
//jwt
//session based - cookies and session (backend storage)
const jwt = 

module.exports.isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];


}

module.exports.isSeller= async (req,res,next) =>{}