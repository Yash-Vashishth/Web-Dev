const User = require("../models/user.model");

async function getUser(req, res) {
    try {
        const id = req.params.id; 
        // if (!id) throw new Error("id is required");  we assume we get the id succesffully

        const user = await User.findbyId(Id);
        res.status(200).json({
            success: true,
            data: user
        }
        );

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }   
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
    
}

function createUser(req,res) {
    const { name, role, id, email } = req.body;

}

function updateUser() {
    try {
        
    } catch (error) {
        
    }

}

function deleteUser() {
    
}

module.exports = {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
