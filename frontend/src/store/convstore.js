import create from 'zustand'
 

const useStore = create((set)=>({
     selectedconversation:null,
     setSelectedConversation: (selectedconversation)=>set({selectedconversation}),
     messages:[],
     setMessages:(messages)=>set({messages})
}))

export default useStore