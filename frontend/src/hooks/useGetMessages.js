import { useState,useEffect } from "react";
import useStore from "../store/convstore";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Error } from "mongoose";



const useGetMessages = ()=>{
    const [loading,setLoading] = useState(false);
    const {authUser} = useAuthContext();
    const {messages,setMessages,selectedconversation} = useStore();

    // if(!selectedconversation || !authUser)
    //     return ;
     
    


    useEffect(()=>{const getMessages = async()=>{
        console.log("checking selected conversation",selectedconversation);
        const receiver_id = selectedconversation._id;
    const sender_id = authUser._id;
    console.log(sender_id);
        setLoading(true);
        console.log('inside getMessages');
        try{
            const res = await fetch(`/api/messages/fetch/${receiver_id}`);
            const data =await res.json();
            if(data.error)
                throw new Error
            console.log("fetched",data.message.messages);
            setMessages(data.message.messages);
            // toast.success('successfully fetched messages');
        }catch(error)
        {
            toast.error('error in fetching messages, try again')
        }finally{
            setLoading(false);
        }

    }
    if(selectedconversation && selectedconversation._id) getMessages()

},[selectedconversation])
    return {loading,messages}

}

export default useGetMessages



// note here what a beautiful use of useeffect for fetching messages, by setting setconversation in dependency array