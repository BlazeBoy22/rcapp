import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast'

const useGetConversations =  ()=>{
     
    const [loading,setLoading] = useState(false);
    const [availableusers,setAvailableUsers] = useState([] );
    useEffect(()=>{
        console.log('ram ram')
        const getUsers = async()=>{

            console.log('inside get users')
            setLoading(true);
            try{
                const res = await fetch('/api/users/getAllUsers');
                const data = await res.json();
                if(data.error)
                        throw new Error;
                console.log("printing users list",data.user);
               setAvailableUsers(data.user);
                localStorage.setItem('check',JSON.stringify(data.user))
            }catch(error)
            {
                toast.error(error.message);
                setAvailableUsers([]);
            }finally{
                setLoading(false);
            }
            
        }
        getUsers();
    },[])
    return {loading,availableusers};

}

export default useGetConversations