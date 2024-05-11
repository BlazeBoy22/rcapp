import create from 'zustand'
import { useEffect } from 'react'

const useStore = create((set)=>({
     selectedconversation:null,
     setSelectedConversation: (selectedconversation)=>set({selectedconversation}),
     messages:[],
     setMessages:(messages)=>set({messages})
}))

export default useStore