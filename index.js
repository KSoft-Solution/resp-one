require('dotenv').config()
require('colors')
const http = require('http')
const app =require('./api/app');
const connectDB = require('./api/config/db');

//database setup
connectDB()
//server setup
const PORT = process.env.PORT || 5000
const server = http.createServer(app)
//server listen

//checking node versions
const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log(
    "Please go to nodejs.org and download version 8 or greater. 👌\n "
  );
  process.exit();
}

server.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`.green.bold)
})

module.exports = app;
