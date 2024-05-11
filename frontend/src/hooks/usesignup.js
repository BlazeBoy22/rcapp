import { useContext, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useSignup = ()=>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullName,userName,password,confirmPassword,gender})=>{
        const success = handleInput({fullName,userName,password,confirmPassword,gender});
        if(!success) {
            toast.error('error in validating inputs');
            return ;
        }  
        setLoading(true);
        try{
            const res = await fetch('/api/auth/signup',{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data = await res.json();
            if(data.error)
                {
                    throw new Error(data.error);
                }
            console.log(data);
            localStorage.setItem('chat-user',JSON.stringify(data.data));
            // alert(data.data.userName);
            setAuthUser(data.data.userName);
        }catch(error)
        {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading,signup}
}

export default useSignup
const handleInput = ({fullName,userName,password,confirmPassword,gender})=>{
    console.log(fullName,userName,password,confirmPassword,gender);
    if(!fullName || !userName || !password || !confirmPassword || !gender)
        {
            alert('in handleInput');

            return false;
        }
    console.log("bhai bhia");
    if(password.length<6)
        {
            console.log('ram ram');
            toast.error('password length short');
            return false;
        }
    if(password!==confirmPassword)
        return false;
    return true;
}


//how cors error was removed by adding proxy in vite.config.js