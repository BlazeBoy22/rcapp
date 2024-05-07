import mongoose from "mongoose";
const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to database");
    }
    catch(error)
    {
        console.log("error connecting to mongodb",error.message)
    }
}

export default dbConnect