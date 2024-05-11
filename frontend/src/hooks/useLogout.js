import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";
import { useState } from "react";
import useStore from "../store/convstore";
 



const uselogout = ()=>{
    const {setSelectedConversation} = useStore();
    const { setAuthUser } = useAuthContext();
    const [loading,setLoading] = useState(false);

    const logout = async()=>{
        alert('reached at logout');
        setLoading(true);
        try{
          const res =   await fetch('/api/auth/logout');
          if(res.error)
            {
                throw new error;
            }
            toast.success('logged out !!!')
            setAuthUser(null);
            localStorage.removeItem('chat-user');
            setSelectedConversation(null);
            
        }catch(error)
        {
            toast.error('error in logging out')
        }finally{
            setLoading(false);
        }

    }
    return {logout}
}

export default uselogout

//where are these store value stored , so that even after logging out it works well