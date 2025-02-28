import express, { Router } from "express"
const router = express.Router()

// User Signup
userRouter.post("/signup", (req,res, next)=>{
    try {
        console.log(req.body)
        res.json({
            status: "success",
            message: "TODO"
        })
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