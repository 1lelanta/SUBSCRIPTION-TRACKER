import mongoose from "mongoose"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const signUp = async(req,res,next)=>{
    // atomic operation
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {name,email,password}=req.body;

        //check if the user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error("User already exist");
            error.statusCode = 409;
            throw error;
        }
        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser = await User.create([{name,email,password:hashedPassword}],{session});

        const token = jwt.sign({userId:newUser[0]._id}, JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})


        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success:true,
            message:'user created successfully',
            data:{
                token,
                user:newUser
            }
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

// sign in logic
export const signIn = async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});

        if(!user){
            const error = new Error("user not found");
            error.statusCode=404;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            const error = new Error("Invalid password");
            error.statusCode=401;
            throw error;
        }

        const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

        res.status(200).json({
            success:true,
            message:"User signed in successfully",
            data:{
                token,
                user
            }
        });
    } catch (error) {
        next(error);
        
    }

}

export const signOut = async(req,res,next)=>{

}