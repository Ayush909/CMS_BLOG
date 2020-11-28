const express = require('express')
const router = express.Router();
const range = require('../range')
const Category = require('../models/category.model')

router.get('/',range,(req,res)=>{
    Category.find()
    .then(results=>{
        res.send(results)
    })
    .catch(error=>{
        res.send(error)
    })
})

router.get('/:id',(req,res)=>{
    console.log('category get api')
    Category.findById(req.params.id)
    .then(results=>{
        res.send(results)
    })
    .catch(error=>{
        res.send(error)
    })
})


router.post('/',(req,res)=>{
    const name = req.body.name
    console.log(name)
    const newCategory = new Category({
        name
    })
    newCategory.save()
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.status(500).send(err);
    })
})

router.delete('/:id',(req,res)=>{
    console.log("delete api hit: ",req.params.id)
    Category.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err)
    })
  
    //res.send(db.posts)
    
})

module.exports = router
