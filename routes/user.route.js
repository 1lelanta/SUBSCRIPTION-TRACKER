import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter=Router();

userRouter.get('/',getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/',(req,res)=>res.send({title:'get user detail'}));

userRouter.put('/:id',(req,res)=>({title:'UPDATE user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'DELETE user'}));

export default userRouter