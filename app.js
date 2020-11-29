require('dotenv/config')
const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const PostsRouter = require('./routes/postsRouter')
const CategoryRouter = require('./routes/categoryRouter')
const UserRouter = require('./routes/userRouter')
const PORT = process.env.PORT || 5000;
const path = require('path')


//db connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('DB connected!');
})

//middlewares
app.use(cors());
app.use(express.json());

//app routes
app.use('/api/posts',PostsRouter);
app.use('/api/categories',CategoryRouter);
app.use('/api/user',UserRouter);


//production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})