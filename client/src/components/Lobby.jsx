import React, { useCallback } from 'react'
import { useState } from 'react'

function Lobby() {
  const [formdata,setformdata]=useState({
    email:"",
    roomno: "",
  })

  const changehandler=(e)=>{
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    })
  };

  const handlesubmit = useCallback((e)=>{
    e.preventDefault();
    console.log(formdata.email);
    console.log(formdata.roomno);
  },[formdata])

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
