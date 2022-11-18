/**
 * things to do
 * 1. initialize NPM and install express
 * 2. Set up express server on 3000 port
 * 3. Create index.html and show "chat app" message on screen
 * 4. Start the application and view in browser
*/
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
//creating another server
const server = http.createServer(app);

// const io = new socketio.Server(server);
//it is also setting up a file to be served.
//new instance of socketio
const io = socketio(server);


const PORT = process.env.PORT || 3000 ;
const publicDirectoryPath = path.join(__dirname, "../public")

//static middleware
app.use(express.static(publicDirectoryPath));


//whenver new connection is established, message will be logged.//server side
io.on('connection', (socket) => {
    console.log("New websocket connection!");
})



//server started, server is used now inplace of app
server.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}...`);
})