import React, { useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useStore from '../../store/convstore';


function MessagesContainer() {
  const [container,setContainer] = useState(true);
  const {selectedconversation} = useStore();
  console.log(selectedconversation);
  return (
    <div className='md:min-w-[550px] flex flex-col'>
      {container? (<>
            <div className='bg-slate-500 px-4 py-2 mb-2 h-[3rem] rounded-md'>
                <span className='label-text'>{selectedconversation && "To :   "}</span><span className='text-gray-900 font-bold'>{selectedconversation && selectedconversation.userName}</span>
            </div>
            <Messages></Messages>
            <MessageInput></MessageInput>
        </>):(<NoChatSelected></NoChatSelected>)
      }
        
    </div>
  )
}


const NoChatSelected = () => {
	 
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋  JohnDoe ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MessagesContainer