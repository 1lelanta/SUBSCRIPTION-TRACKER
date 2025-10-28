import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import createSubscription from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'Get all subscriptions'}));

subscriptionRouter.get('/:id',(req,res)=>res.send({title:'get subscription detail'}));

subscriptionRouter.post('/',authorize,createSubscription);

subscriptionRouter.put('/:id',(req,res)=>res.send({title:"UPDATE subscription"}));

subscriptionRouter.delete('/:id',(req,res)=>res.send({title:'DELETE subscription'}));

subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:'get all subscription'}));

subscriptionRouter.put('/:id/cancel',(req,res)=>res.send({title:'cancel subscription'}));

subscriptionRouter.get('/upcoming-renewals',(req,res)=>({title:'GET upcoming renewals'}))

export default subscriptionRouter;

