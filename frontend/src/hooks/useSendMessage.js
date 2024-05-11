import { useState } from "react"
import useStore from "../store/convstore";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const sendMessages =  ()=>{
    const [loading,setLoading] = useState(false);
    const {selectedconversation,setSelectedConversation} = useStore();
    const {authUser} =  useAuthContext();
    console.log('fsdfds',selectedconversation,authUser);

    const useSendMessages = async(message)=>{
        console.log('use send message',message,selectedconversation._id);
        console.log('why this kolaveri dddd')
        setLoading(true);
        const messages = {text:message}
        try{
            alert('message hai bhai log',message);
            if(!selectedconversation || !authUser)
                return ;
            const res = await fetch(`/api/messages/send/${selectedconversation._id}`,
               {
                method:"POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(messages)

               }
            );
            const data = await res.json();
            toast.success('message send successfully');
            console.log(data);
            
        }catch(error)
        {
            toast.error('cannot send messages');
        }finally{
            setLoading(false);
        }
       
    }
    console.log('now i am reutrning')
    return {loading,useSendMessages};
}

export default sendMessages


//when you make the sendmessages async , it will not work