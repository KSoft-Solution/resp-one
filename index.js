const app =require('./api/app')

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port :${5000}`)
})

module.exports = app;
