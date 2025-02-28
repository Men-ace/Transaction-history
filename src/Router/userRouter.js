import express, { Router } from "express"
import { hashedPassword } from "../utility/bcryptHelper"
import { createUser } from "../model/userModel"
import { buildErrorResponse, buildSuccessResponse } from "../utility/responseHelper"
const router = express.Router()

// User Signup | Create User 
userRouter.post("/signup", (req,res, next)=>{
    try {
        // Sign up process 
        const {name, email, password} = req.body
        
        // encrypt the password -> hashing the password
        const hashedPassword = hashedPassword(password)

        // create a user in db 
        const user = await  createUser({
            name : name,
            email: email,
            password : hashedPassword
        })

        user?._id
        ? buildSuccessResponse(res, user, 'user created successfully')
        : buildErrorResponse(res, 'could  not create user')


    } catch (error) {
        // handle unique email error from db
        if(error.code === 11000){
            error.message = " user already exists"
        }

      // this is not a good practice
      buildErrorResponse(res, error.message)
    }
})

// User login 
userRouter.post("/login", async(req, res) =>{

})


// User profile 