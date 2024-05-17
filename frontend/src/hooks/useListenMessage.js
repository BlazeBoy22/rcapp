import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useStore from "../store/convstore";

const useListenMessages = ()=>{
    const {socket} = useSocketContext();
    const {messages,setMessages} =useStore();

    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            alert('new message is reveived')
            setMessages([...messages,newMessage])
        })
        return ()=>socket?.off('newMessage')
    },[socket,setMessages,messages])
}

export default useListenMessages