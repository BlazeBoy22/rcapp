import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Messages",
            default:[]
        }
    ]
},{timestamps:true})

const conversationmodel = mongoose.model('Conversation',conversationSchema)
export default conversationmodel








//this timestamp will capture the time at which messages was created and updated