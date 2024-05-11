import express from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';

import dbConnect from './db/dbConnect.js';

import authRoutes from "./routes.js/auth.routes.js"
import messageRoutes from './routes.js/message.routes.js'
import userRoutes from './routes.js/user.routes.js'

const app = express();

dotenv.config();
//is it necessary to write port in caps in env
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>
{
    dbConnect();
    console.log(`server running on port ${PORT}`)
})

 
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);
app.get('/',(req,res)=>{
    res.send("<h1>hello world!!</h1>")
})