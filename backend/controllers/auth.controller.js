import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/tokengenerator.js";

export const signup = async (req,res)=>{
     try{
        const {fullName,userName,password,confirmPassword,gender} = req.body;
        console.log(req.body);
        const maleavatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleavatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        if(password!==confirmPassword)
            return res.status(500).json({
                message:"password doesnot match"
        })
        const user =await User.findOne({userName});
        
        console.log('hello');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        console.log(hashedPassword);
        if(user)
            {
                return res.status(502).json({
                    message:"user already exists"
                })
            }
         const newuser = new User({
            fullName,
            userName,
            password:hashedPassword,
            confirmPassword,
            gender:gender,
            profilePic:gender==="male"?maleavatar:femaleavatar 
         })
         if(newuser)
         {
            console.log('namaste ji',newuser)
          generateTokenAndSetCookie(res,newuser._id)
          console.log('yo yo')
         await newuser.save();
         return res.status(200).json({
            success:true,
            data:newuser,
            _id:newuser.id,
            message:"user successfully created"
         })
        }else{
            return res.status(400).json({
                error:"invalid user data"
            })
        }

     }catch(error)
     {
        return res.status(503).json({
            error:error.message,
            message:"error while creating user id  "
        })
     }
}

export const login = async (req,res)=>{
     const {username,password} = req.body;
     console.log(username,password);
     if(!username || !password)
     {
        return res.status(500).json({
            message:"required field not filled properly",
            error:"login error"
        })
     }
     console.log("login functionality")
     const user =await User.findOne({userName:username});
     if(!user)
     {
        return res.status(501).json({
            message:"no such user exists"
        })
     }
     console.log(user.userName);
     console.log(password,user.password);
     if(await bcrypt.compare(password,user?.password||"") )
     {
        console.log('namaste ji');
        console.log(user.password);
        generateTokenAndSetCookie(res,user._id);
        console.log('new returning response',user)
        return res.status(200).json({
            _id:user._id,
            data:user,
            message:"successfully logged in"
        })
     }
     else{
        return res.status(502).json({
            message:"login error ,username || password is invalid"
            
        })
     }
}

export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({
            message:"logged out successfully "
        })
    }catch(error)
    {
        console.log('error in logout controller',error.message)
        res.status(500).json({
            message:"interhal server error"
        })
    }
}