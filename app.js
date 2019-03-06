var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/client.html");
});

http.listen(process.env.PORT || 3000,()=>{
    console.log('listening on *:'+process.env.PORT);
});