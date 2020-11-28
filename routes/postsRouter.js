const express = require('express')
const router = express.Router();
const range = require('../range')
const BlogPost = require('../models/Blogposts')


router.get('/posts/:id',(req,res)=>{
    console.log("single post api hit")
    
    BlogPost.findById(req.params.id)   
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send(err);
    })
        
})

router.get('/randompost',(req,res)=>{

    BlogPost.countDocuments().then(count=>{
        
        var random = Math.floor(Math.random() * count)
        
        BlogPost.findOne().skip(random)
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            console.log(err)
        })
    })

    // BlogPost.count().exec(function (err, count) {

    //     // Get a random entry
    //     var random = Math.floor(Math.random() * count)
      
    //     // Again query all BlogPosts but only fetch one offset by our random #
    //     BlogPost.findOne().skip(random).exec(
    //       function (err, result) {
    //         // Tada! random BlogPost
    //         console.log(result) 
    //       })
    //   })
})

router.get('/',range,(req,res)=>{
   // console.log("/api/posts/ api hit")
    
    BlogPost.find()    
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send(err);
    })
        
})

router.get('/:id',(req,res)=>{
    
    BlogPost.findById(req.params.id)
    .populate('category')    
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send(err);
    })
        
})



router.post('/',(req,res)=>{
    console.log("api/post create post api hit")
    const {title,subtitle,body,author,category} = req.body;
    console.log(req.body)
    const post = new BlogPost({
        title,
        subtitle,
        body,
        author,
        publishedAt : new Date(),
        category : category
    })
    post.save()
        .then(result=>{
            res.json(result);
        })
        .catch(err=>{
            res.status(500).send(err);
        })
    
})

router.delete('/:id',(req,res)=>{
    console.log("delete api hit: ",req.params.id)
    BlogPost.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err)
    })
    
})

router.put('/:id',(req,res)=>{
    console.log("put post api hit")
    // console.log(req.params.id)
    // console.log(req.body)
    const {title,subtitle,body,author,category} = req.body;
    BlogPost.findByIdAndUpdate(req.params.id,{title,subtitle,body})
    .then(result=>{
        res.send(result)
    })
    .catch(error=>{
        res.send(error)
    })
})

router.get('/catpost/:id',(req,res)=>{
    console.log('catpost  api hit',req.params.id)
    const categoryID = req.params.id

    BlogPost.find({category : categoryID})
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })

})

module.exports = router;