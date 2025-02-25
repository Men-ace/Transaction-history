import express, { Router } from "express"
const router = express.Router()

// User Signup
router.post("/", (req,res, next)=>{
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



// User profile 