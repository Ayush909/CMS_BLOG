const express = require('express')
const router = express.Router();
const User = require('../models/User.model')

router.post('/login',(req,res)=>{
    
    const {username,password}  = req.body
    
    User.findOne({username:username})
    .then(userfound=>{
       
        if(userfound){
            if(userfound.password === password){
                res.json({auth:'dont_judge_my_authentication_this_is_not_an_authentication_ex@mple'})
            }else{
                res.status(401).json({error:'Invalid credentials'})
            }
        }
        res.status(401).send('User not found')
       
    })
    .catch(error=>{
        res.status(401).send(error)
    })
})
// router.post('/createuser',(req,res)=>{
//     console.log(req.body)
//     const {username,password}  = req.body
//     const newUser = new User({
//         username,
//         password
//     })

//     newUser.save()
//     .then(result=>{
//         res.send(result)
//     })
//     .catch(error=>{
//         res.send('error: ',error)
//     })
// })

module.exports = router;