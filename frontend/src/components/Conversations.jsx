import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';



  function Conversations() {

  const {loading,availableusers} =  useGetConversations()
 console.log(loading,availableusers);
  
  
  
  return (
    <div className='overflow-y-scroll h-[65%]' >
     {loading ? <span className="loading loading-spinner w-11 text-green-700 mt-[40%]"></span>:
      availableusers.map((item,index)=>(
       <Conversation key={item._id} item={item} check={index===availableusers.length-1}></Conversation>
      ))
     }
     
        
    </div>
  )
}

export default Conversations