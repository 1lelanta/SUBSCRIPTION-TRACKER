import express from 'express'
import { PORT } from './config/env.js';

const app = express();


app.listen(PORT,()=>{
    console.log(`app is running on http://localhost/${PORT}`);
})