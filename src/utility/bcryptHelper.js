import bcrypt from "bcryptjs"

export const hashedPassword = (plainPassword) =>{
    const hashedPassword = bcrypt.hashSync(plainPassword)
    return hashedPassword
}