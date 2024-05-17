import { useAuthContext } from "../context/AuthContext"
import { useState } from "react";
import toast from "react-hot-toast";

const useLogin =  ( )=>{
    const {setAuthUser} =useAuthContext();
    const [loading,setLoading] = useState();
  const login = async(formData)=>{ 
    if(!formData.username || !formData.password)
            {
                toast.error('all fields are required');
                return ;
            }
    console.log("i am inside login function")
    setLoading(true);
     try{
    const res = await fetch('/api/auth/login',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(formData)

    })
    const data = await res.json();
    console.log("login response,",data);
    if(!data){
        toast.error('error in loggin in')
        return;
    }
    if(data.error)
        {
            throw new error;
        }
     
        setAuthUser(data.data );
        console.log("login",data.data);
        // alert(data.data.userName);
        //you need to specify key value for storing something in localStorage, otherwise it will not work
        localStorage.setItem('chat-user',JSON.stringify(data.data) );
        return true;
    }catch(error){
        toast.error('error during logging in')
        }finally{
            setLoading(false);
        }
    }
    return {login};

}
export default useLogin;