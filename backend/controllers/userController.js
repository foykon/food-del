import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../models/userModel.js"


// login user
const loginUser = async (req,res) => {

}

// register user
const registerUser = async (req,res) => {
    const {name, password, email}= req.body;
    try {
        // checking is user already exists
        const exists = await userModel.modelName.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists!"})
        }
    } catch (error) {
        
    }
}

export {loginUser, registerUser}