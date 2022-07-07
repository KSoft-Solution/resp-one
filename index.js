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
server.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`.green.bold)
})

module.exports = app;
