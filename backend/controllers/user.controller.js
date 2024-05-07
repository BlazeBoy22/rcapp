import User from "../models/user.model.js";

export const getAllUsers = async(req,res)=>{
    try{
    const users =await User.find({_id:{$ne:req.user._id}}).select('-password');
    console.log(users);
    if(!users)
        {
            return res.status(500).json({
                message:"return in fetching user "
            })
        }
        console.log(users);
        return res.status(200).json({
            success:true,
            message:"successfully fetched user",
            user:users
        })
    }catch(error)
    {
        console.log(error.message);
        return res.status(500).json({
            error:error.message,
            message:"error in fetching all user details"
        })
    }
}