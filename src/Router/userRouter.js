import express, { Router } from "express"
const router = express.Router()

// User Signup | Create User 
userRouter.post("/signup", (req,res, next)=>{
    try {
        // Sign up process 
        const {name, email, password} = req.body
        
        // encrypt the password -> hashing the password
        const hashedPassword = 

    } catch (error) {
        res.json({
            status: "error",
            message: error.message
        })
    }
})

// User login 
userRouter.post("/login", async(req, res) =>{

})


// User profile 