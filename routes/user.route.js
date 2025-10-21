import { Router } from "express";

const userRouter=Router();

userRouter.get('/',(req,res)=>res.send({title:'get all users'}));

userRouter.get('/:id',(req,res)=>res.send({title:'get user detail'}));

userRouter.post('/',(req,res)=>res.send({title:'CREATE new user'}));

userRouter.put('/:id',(req,res)=>({title:'UPDATE user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'DELETE user'}));

export default userRouter