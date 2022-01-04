const { dirname } = require('path');
const path = require('path');
const express = require('express')
const SocketIo = require('socket.io');
const http = require('http');

const port = process.env.port || 3000;
const publicpath = path.join(__dirname, '../public');

const app = express();

const server = http.createServer(app);

const io = SocketIo(server); 

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
    console.log("New Connection has been created");

    // socket.emit('NewEmail',{
    //     from : 'mike@example.com',
    //     text : 'Hey ! What is goinng on',
    //     createdAt : 233
    // })

    socket.emit('NewMessage',{
        from : "Muhammad Nawaz",
        text : "Hi! from Muhammad Nawaz",
        createdAt : 123123
    })


    socket.emit('emailfromserver',{
        from : "saqib@gmail.com",
        to : "ahsannawaz111222@gmail.com",
        Message : "Thanks for wishing me"
    })

    //carrier socket
    socket.on('createmessage',function(message){
        console.log("create Message", message);
    })

     //carrier socket for email
     socket.on('NewEmail',function(email){
         console.log('New Email is :',email);
     })
    
   

    socket.on('disconnect',()=>{
        console.log("user was disconnected")
    })
})

server.listen(port,()=>{
    console.log("Server has been started on port 3000")
})

