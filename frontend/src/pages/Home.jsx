import React from 'react'
import Sidebar from '../components/Sidebar'
import MessagesContainer from '../components/messages/MessagesContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-900   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <Sidebar></Sidebar>
      {/* <MessageContainer></MessageContainer> */}
      <MessagesContainer></MessagesContainer>
    </div>
  )
}

export default Home