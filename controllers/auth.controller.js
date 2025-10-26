import mongoose from "mongoose"
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

JWT_SECRET = process.env.JWT_SECRET;
JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

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

        const newUsers = await User.create([{name,email,password:hashedPassword}],{session});

        const token = jwt.sign({userId:newUsers[0]._id}, JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})


        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success:true,
            message:'user created successfully',
            data:{
                token,
                user:newUsers
            }
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}