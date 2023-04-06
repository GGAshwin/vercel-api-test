const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        res.json({
            status:200,
            message:'Working Fine'
        })
    }catch(err){
        res.json({err})
    }
})
module.exports = router