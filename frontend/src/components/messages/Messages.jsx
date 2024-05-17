import React from 'react'
import Message from './Message'
import { useEffect,useRef } from 'react';
import useStore from '../../store/convstore'
import NoChatSelected from './NoChatSelected';
import useListenMessages from '../../hooks/useListenMessage';
import useGetMessages from '../../hooks/useGetMessages';

function Messages() {
  const {selectedconversation,setSelectedConversation} = useStore();
  const {messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);
  useEffect(() => {
    
    
		setTimeout(() => {
      console.log(lastMessageRef.current);
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {selectedconversation?
        (messages &&   (messages.map((item,index)=>(<div key={item.id} ref={lastMessageRef}><Message item={item} ></Message></div>))))
        :<NoChatSelected></NoChatSelected>}
         
    </div>
  )
}

export default Messages