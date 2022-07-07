const router = require('express').Router()


router.get('/',(req,res)=>{
    res.status(200).json({
        data:[
            {
                "name":"ashok sahu",
                "job":"software"
            }
        ],
        message:'success'
    })
})

module.exports = router