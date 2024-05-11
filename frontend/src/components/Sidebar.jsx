import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logoutbutton from './Logoutbutton'

function sidebar() {
  return (
    <div className='relative'>
        <SearchInput></SearchInput>
        <div className='divider px-3'></div>
         
        <Conversations></Conversations>
        <Logoutbutton></Logoutbutton>
    </div>
  )
}

export default sidebar