var app = require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.get("/",function(req,res){
     res.sendFile(__dirname+"/index.html");   
    
});
var clients = 0;
io.on('connection', function(socket) {
    console.log('A user connected');
    clients++;
    io.sockets.emit('broadcast',{description:clients + ' Clients Connected'});
    setTimeout(function(){
        socket.emit('ServerEvent',{desc:'...'});
    },2000);
    
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        clients--;
       console.log('A user disconnected');
    });

    socket.on('clientEvent',function(data){
        console.log(data);
    })
 });

 var nsp = io.of("/KEM13");
 nsp.on('connection',function(socket){
    console.log("Someone Connected");
    nsp.emit('Test','Good Eveaning Every One');
 });
 


http.listen(5000,(socket)=>{
      console.log('listening at Port:5000');      
});