// Create express app
import express from "express"
import userRouter from './Router/userRouter.js'

const app = express()
const PORT = 8000 

app.use(express.json);

// Connect with Db
// create user create endpoint | POST

// Create user route
app.use('/api/user', userRouter);

// Run the server
app.listen(PORT, (error)=>{
    error?
        console.log("Error", error) :
        console.log("your server is running in http://localhost:" +PORT)
})
