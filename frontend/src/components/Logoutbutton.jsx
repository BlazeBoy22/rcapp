import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from '../context/AuthContext';
import useSignup from '../hooks/usesignup';
import uselogout from '../hooks/useLogout';

function Logoutbutton() {
  const {loading,logout} = uselogout();
  return (
    <div className='absolute bottom-0'>
    {
      loading?<span className="loading loading-spinner text-neutral"></span>:<BiLogOut className='text-4xl cursor-pointer text-cyan-300' onClick={()=>logout()}></BiLogOut>
    }
        
    </div>
  )
}

export default Logoutbutton