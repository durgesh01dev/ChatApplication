/**
 * things to do
 * 1. initialize NPM and install express
 * 2. Set up express server on 3000 port
 * 3. Create index.html and show "chat app" message on screen
 * 4. Start the application and view in browser
*/
const path = require('path');
const express = require('express');
const app = express();

const {PORT} = process.env ;
const publicDirectoryPath = path.join(__dirname, "../public")

//static middleware
app.use(express.static(publicDirectoryPath));

//server started
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}...`);
})