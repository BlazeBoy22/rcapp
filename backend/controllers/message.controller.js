import conversationmodel from "../models/conversation.model.js";
import messages from "../models/messages.model.js";
import User from "../models/user.model.js";


export const sendMessage = async (req,res)=>{
    console.log('hi')
     try{
        console.log('inside send message');
        const {text}=req.body;
        const message = text;
        console.log('printing message body ',req.body);
        if(!message)
                return res.status(505).json({
            success:false,
            message:"empty message"
            })
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        console.log(senderId);
        const user = await User.findOne({_id:senderId})
        console.log('hello hi');
        console.log(user);
        if(!user)
                return res.status(501).json({
                    success:false,
                    message:"invalid user"
            })
        const receiver = User.find({_id:receiverId});
        console.log('hi');
        if(!receiver)
            {
                return res.status(501).json({
                    success:false,
                    message:"no such user exists"
                })
            }
        let conversation = await conversationmodel.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversation)
            {
                conversation = await conversationmodel.create({
                    participants:[senderId,receiverId]
                })
            }
            const newMessage = new messages({
                senderId,
                receiverId,
                messages:message
            })
            console.log("hello jee")
            let conv;
            if(newMessage)
                {
                    const newm = await newMessage.save();
                    console.log(newm);
                    conversation.messages.push(newm._id)
                    console.log("yo you");
                   conv =  await conversation.save();
                    console.log("i io")
                }
                //find out the use of populate
                return res.status(200).json({
                    success:true,
                    message:"conversation and message successfully created",
                    message:message,
                    conversation:conv
                })
                //await promise.all([conversation.save(),newMessage.save()]) ----> so this command will save both in db parallely 

     }catch(error)
     {
        console.log("error in send Message controller :",error);
       return res.status(500).json({error:"Internal Server error"})
     }
}
export const getMessage = async(req,res)=>{
    try{
    const {id:receiverId}=req.params ;
    const senderId = req.user._id;
    console.log('sender id ',senderId,'reveiver id',receiverId)
    const message = await conversationmodel.findOne({
        participants:{$all:[senderId,receiverId]}
    }).populate('messages');
    console.log('printing conversation and messages',message);
    if(!message)
        {
            return res.status(200).json({
                message:"no message exists"
            })
        }
        return res.status(200).json({
            success:true,
            message:message
        })
    }catch(error)
    {
        console.log(error.message);
        return res.status(501).json({
            error:error.message
        })
    }

}