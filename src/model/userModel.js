import userModel from "../schema/userSchema";

// create user 
export const createUser = (userObject) => {
    return userModel(userModel).save()
}