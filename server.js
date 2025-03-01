// Create express app
import express from "express"
import { connectToMongoDb } from "./config/dbConfig.js"

// connect to Db 
connectToMongoDb
// express app
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8000 

//api endpoints // create user endpoint | POST
import userRouter from "./Router/userRouter.js"
app.use("/api/v1/users", userRouter )

app.get("/",(req,res)=>{
    res.json({
        message:"its live"
    })
})

// run the server
app.listen(PORT, (error)=>{
    error?
        console.log("Error", error) :
        console.log("your server is running in http://localhost:" +PORT)
})
