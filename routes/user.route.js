import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter=Router();

userRouter.get('/',getUsers);

userRouter.get('/:id',getUser);

userRouter.post('/',(req,res)=>res.send({title:'get user detail'}));

userRouter.put('/:id',(req,res)=>({title:'UPDATE user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'DELETE user'}));

export default userRouter