import React, { useCallback , useEffect} from 'react'
import { useState } from 'react'
import { useSocket } from '../context/SocketProvider';

function Lobby() {
  const [formdata,setformdata]=useState({
    email:"",
    roomno: "",
  })

  const handlejoin = useCallback(
    (data) => {
      const {email,roomno}=data;
      console.log(email,roomno); 
    },
    [second],
  )
  

  useEffect(()=>{
    socket.on('room:join',handlejoin);
    return() =>{
      socket.off('room:join',handlejoin);
    }
  })
  

  const changehandler=(e)=>{
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    })
  };
  const socket = useSocket();

  const handlesubmit = useCallback((e)=>{
    e.preventDefault();
    socket.emit("room:join",formdata);
  },[formdata,socket])

  return (
    <div>
      <h1>
        Lobby
      </h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor='email'>Email Id</label>
        <input type='email' id='email'
        value={formdata.email} onChange={changehandler}/>
        <br/>
        <label htmlFor='roomno'>Room no</label>
        <input type='number' id='roomno' 
        value={formdata.roomno} onChange={changehandler}/>
        <button>Join Room</button>
      </form>
    </div>
  )
}

export default Lobby
