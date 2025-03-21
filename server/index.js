const {Server} = require("socket.io");

const io = new Server(8000,
    {cors: true,}
);

const emailtosocketidmap = new Map();
const socketidtoemailmap = new Map();

io.on("connection",(socket)=>{
    socket.on('room:join',(data)=>{
        const {email,roomno}=data;
        emailtosocketidmap.set(email,socket.id);
        socketidtoemailmap.set(socket.id,email);
        io.to(socket.id).emit("room:join",data);
    });
});

