import React,{startTransition, useCallback, useEffect,useState} from 'react'
import { useSocket } from '../context/SocketProvider'
import ReactPlayer from 'react-player'
import peerservice from '../../services/peerservice';

function Room() {
    const socket = useSocket();
    const [socketids,setsocketids] = useState();
    const [mystream,setmystream]= useState(null);
    const handleuserjoined = useCallback(({email,id})=>{
        console.log(`email ${email} joined the room`);
        setsocketids(id);
    },[socketids,socket])
    const handleincommingcall=useCallback(({from, offer})=>{
        console.log(offer);
    },[socket]); 
    useEffect(() => {
        socket.on('user:joined',handleuserjoined);
        socket.on('incomming:call',handleincommingcall);
        return()=>{
          socket.off('user:joined',handleuserjoined);
          socket.on('incomming:call',handleincommingcall);
        }
      }, [socket,handleuserjoined,handleincommingcall])

    const handlecalluser = useCallback(async()=>{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        const offer=await peerservice.getOffer();
        socket.emit("user:call",{to: socketids,offer});
        setmystream(stream);
    },[socketids,socket]);
    
  return (
    <div>
      <h1>
        Room page
      </h1>
      <h4>
        {socketids?"connected":"no one in the room"}
      </h4>
      {socketids&&<button onClick={handlecalluser}>Call</button>}
      <div>
      {mystream && (
        <>
          <h1>My Stream</h1>
          <ReactPlayer
            playing
            muted
            height="200px"
            width="300px"
            url={mystream}
          />
        </>
      )}
      </div>
    </div>
  )
}

export default Room
