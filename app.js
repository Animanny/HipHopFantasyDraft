var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});



http.listen(process.env.PORT, ()=>{
    console.log("listening on *:"+process.env.PORT);
});