import { useState } from "react"
import useStore from "../store/convstore";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const sendMessages =  ()=>{
    const [loading,setLoading] = useState(false);
    const {selectedconversation,setSelectedConversation,setMessages,messages} = useStore();
    const {authUser} =  useAuthContext();
    console.log('fsdfds',selectedconversation,authUser);

    const useSendMessages = async(message)=>{
        console.log('use send message',message,selectedconversation._id);
        console.log('why this kolaveri dddd')
        setLoading(true);
        const messages1 = {text:message}
        try{
            
            if(!selectedconversation || !authUser)
                return ;
            const res = await fetch(`/api/messages/send/${selectedconversation._id}`,
               {
                method:"POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(messages1)

               }
            );
            const data = await res.json();
                    
                    console.log('checkingdata',data);
                    // alert('ayo',messages)
                    console.log('problem solving',messages)
                    setMessages([...messages,data.messages])
               
            toast.success('message send successfully');
            
            console.log(data);
            
        }catch(error)
        {
            console.log("ye hai error ",error.message)
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