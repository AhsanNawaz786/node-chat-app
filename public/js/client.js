var socket = io();

socket.on('connect',function(){
    console.log("Connected to Server")
})

socket.emit('createmessage',{
    from : "ahsan@gmail.com",
    to : "saqib@gmail.com",
    text : "happy birthday!"
})


socket.on('WelcomeMessage',function(message){
    console.log("Welcome Message from server is: ",message);
})

// socket.emit('NewEmail',{
//     from : "ahsannawaz111222@gmail.com",
//     to : "saqib@gmail.com",
//     message : "Hello, Happy Birthday!"
// })


//carrier email from server
socket.on('emailfromserver',function(email){
    console.log("Email from saqib's Server ",email)

})

socket.on('NewMessage',function(message){
    console.log("New Message is ", message)
})

socket.on('disconnect',function(){
    console.log("Disconnected from server");
})


