const User = require("../models/user.model")
const bcrypt = require('bcryptjs')
const errorHandler = require("../utils/error")



const signup = async(req, res) => {
 
    const { username, email, password } = req.body

    if(!username || !email || !password || username === "" || email === "" ||password === ""){

        next(errorHandler(400, "All fields are required"))
    }
    const hashedPassword = bcrypt.hashSync(password, 10)

    const newUser = new User({

        username, email, password:hashedPassword
    })

    try{
        await newUser.save()

        res.json({message : "signup succesfully"})

    }catch(error){
        next(errorHandler(500,"invalid data"))
    }

    
    
    
}

module.exports = signup