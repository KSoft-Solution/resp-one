require('dotenv').config()
const http = require('http')
const app =require('./api/app');
const connectDB = require('./api/config/db');

connectDB()

const server = http.createServer(app)

server.listen(process.env.PORT || 5000,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("[SERVER]: Listening at http://<%s>:%s", host, port)
})

module.exports = app;
