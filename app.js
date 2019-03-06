var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

io.on("connection",(socket)=>{
    console.log("New Connection!");

    socket.on("disconnect",()=>{
        console.log("A user has disconnected");
    });
    socket.on('chat message', (message)=>{
        console.log(message);
        io.emit('chat message', message);
    });
});

http.listen(process.env.PORT || 3000,()=>{
    console.log('listening on *:'+process.env.POR);
});