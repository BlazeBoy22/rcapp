import React from 'react'
import Message from './Message'
import useStore from '../../store/convstore'
import NoChatSelected from './NoChatSelected';

function Messages() {
  const {selectedconversation,setSelectedConversation} = useStore();
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {selectedconversation?<Message></Message>:<NoChatSelected></NoChatSelected>}
         
    </div>
  )
}

export default Messages