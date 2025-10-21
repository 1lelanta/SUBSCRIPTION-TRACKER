import express from 'express'
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import subscriptionRouter from './routes/subscription.routes.js';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription',subscriptionRouter)


app.listen(PORT,()=>{
    console.log(`app is running on http://localhost/${PORT}`);
})