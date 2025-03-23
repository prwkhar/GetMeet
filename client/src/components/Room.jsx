import React,{useCallback, useEffect,useState} from 'react'
import { useSocket } from '../context/SocketProvider'

function Room() {
    const socket = useSocket();
    const [socketids,setsocketids] = useState();
    const [mystream,setmystream]= useState(null);
    useEffect(() => {
        socket.on('user:joined',handleuserjoined);
        return()=>{
          socket.off('user:joined',handleuserjoined);
        }
      }, [socket,handleuserjoined])

    const handleuserjoined = useCallback(({email,id})=>{
        console.log(`email ${email} joined the room`);
        setsocketids(id);
    },[])

    const handlecalluser = useCallback(async()=>{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
    },[])
    
  return (
    <div>
      <h1>
        Room page
      </h1>
      <h4>
        {socketids?"connected":"no one in the room"}
      </h4>
    </div>
  )
}

export default Room
