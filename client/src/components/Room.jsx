import React,{useCallback, useEffect} from 'react'
import { useSocket } from '../context/SocketProvider'

function Room() {
    const socket = useSocket();
    const handleuserjoined = useCallback(({email,roomno})=>{
        console.log(`email ${email} joined the room`);
    },[])
    useEffect(() => {
      socket.on('user:joined',handleuserjoined);
      return()=>{
        socket.off('user:joined',handleuserjoined);
      }
    }, [socket,handleuserjoined]);
    
  return (
    <div>
      <h1>
        Room page
      </h1>
    </div>
  )
}

export default Room
