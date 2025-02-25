// Create express app
import express from "express"
import { connectToMongoDb } from "./config/dbconfig"

// connect to mongo db 



// express app
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8000 

//api endpoints 
import userRouter from "./Router/userRouter.js"
app.use("/src/v1/users", userRouter )


app.get("/",(req,res)=>{
    res.json({
        message:"its live"
    })
})

// connect to Db 
connectToMongoDb

// Create user Route 



// create user endpoint | POST






// run the server
app.listen(PORT, (error)=>{
    error?
        console.log("Error", error) :
        console.log("your server is running in http://localhost:" +PORT)
})
