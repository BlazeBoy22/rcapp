 import React from 'react'
 import useStore from '../store/convstore';
 
 function Conversation({ item,check}) {

  const {selectedconversation,setSelectedConversation} = useStore();
   return (
     <div className={`mt-[0.4rem] mb-[0.4rem] select-none ${selectedconversation && selectedconversation._id===item._id?"bg-cyan-800":""}`} onClick={()=>setSelectedConversation(item)}>
        <div className='flex gap-5 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={item.profilePic} alt='display picture' width="12"></img>
                </div>
            </div>
            <div className='flex justify-between w-[90%]'>
                <p>{item.userName}</p>
                <p><span>🐞</span></p>
            </div>
        </div>
        {!check && <div className='  divider h-[0.05rem] my-0 py-0 bg-green-400 opacity-60'></div>}
     </div>
   )
 }
 
 export default Conversation

 //find out what are fragments <></>
 //key error why

 //does redux toolkit holds values upon refreshing or not