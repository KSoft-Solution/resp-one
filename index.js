require('dotenv').config()
const app =require('./api/app');
const connectDB = require('./api/config/db');

connectDB()

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port :${5000}`)
})

module.exports = app;
