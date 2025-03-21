import React,{createContext, useContext, useMemo} from 'react'
import {io} from "socket.io-client"

const socketcontext = createContext(null);

export const useSocket = () =>{
    const socket = useContext(socketcontext);
    return socket; 
};

function SocketProvider({props}) {
    const socket = useMemo(()=>io("localhost:8000"),[]);
  return (
    <socketcontext.Provider value={socket}>
        {props}
    </socketcontext.Provider>
  )
}

export default SocketProvider
