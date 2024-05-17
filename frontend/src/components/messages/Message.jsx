import React from 'react'
import useStore from '../../store/convstore';
import { useAuthContext } from '../../context/AuthContext';

function Message({item}) {
  const {messages} = useStore();
  const {selectedconversation} = useStore();
  const {authUser} = useAuthContext();
  console.log("item successfully received",item);
  const sender_id = item.senderId;
  const receiver_id = item.receiverId;
  const senderClass = 'chat chat-start ';
  const receiverClass = 'chat chat-end';
  const senderbackground = 'bg-cyan-800';
  
  return (
    <div>
        <div className={`${sender_id!==selectedconversation._id?senderClass:receiverClass}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={`${sender_id!==selectedconversation._id?authUser.profilePic:selectedconversation.profilePic}`} />
            </div>
          </div>
        <div  className={`${sender_id!==selectedconversation._id?senderbackground:""} chat-bubble`}>{item.messages}</div>
      </div>
       
    </div>
  )
}

export default Message