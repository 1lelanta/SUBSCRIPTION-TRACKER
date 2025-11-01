import express from 'express';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import subscriptionRouter from './routes/subscription.routes.js';
import dotenv from 'dotenv';
import connectToDatabase from './database/mongodb.js';
import errorMiddlewar from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.route.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);
app.use('/api/v1/workflows',workflowRouter);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.use(errorMiddlewar);

const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
  });
};

startServer();
