import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectedRoute = async(req,res,next)=>{
    try{
        console.log(req.cookies);
        const token = req.cookies.jwt;
        if(!token)
            return res.status(401).json({
                error:"Unauthorised - No Token Provided"
        })
        //check if await is required or not
        const decoded =await jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded)
        {
            return res.status(400).json({
                message:"invalid token"
            })
        }
        //select("-password") will remove password from user
        const user = await User.findById(decoded.userId).select("-password");
        if(!user)
        {
            return res.status(404).json({
                message:"user not found"
            })
        }
        req.user = user
        next();

    }catch(error)
    {
        console.log("error in protect route middleware",error.message)
        res.status(500).json({
            error:error.message,
            message:"error in validating token"
        })
    }
}

export default protectedRoute