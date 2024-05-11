import React,{useState} from 'react'
import {BsSend} from 'react-icons/bs'
import sendMessages from '../../hooks/useSendMessage'



function MessageInput() {
   const {loading,useSendMessages} = sendMessages();
   console.log('ayo',loading);
  const [message,setMessages]=useState('');
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log('ye message bheja ja rha hai ',message);
    console.log('ready booz')
     const res = await useSendMessages(message);
  }
  return (
    <form className='px-4 my-3 relative' onSubmit={handleSubmit}>
        <div className='w-full'>
            <input type='text' className='border text-sm rounded-lg   w-full p-2.5 bg-gray-700 border-gray-600 text-white ' placeholder='send a message' value={message} onChange={(e)=>(setMessages(e.target.value))}>

            </input>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-7'><BsSend></BsSend></button>
        </div>
    </form>
  )
}

export default MessageInput