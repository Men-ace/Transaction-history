import bcrypt from "bcryptjs"

const SALT  = 15 
export const hashedPassword = (plainPassword) =>{
    const hashedPassword = bcrypt.hashSync(plainPassword)
    return hashedPassword
}