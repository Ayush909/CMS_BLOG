import React, { useEffect, useState } from 'react'
import { Button, Jumbotron,Image,Col,Row,Container } from 'react-bootstrap'
import PostCard from '../PostCard/PostCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [posts,setPosts] =  useState([])
    const [randomPost,setRandomPost] =  useState(null)

    useEffect(()=>{
        axios.get('/api/posts')
            .then(result=>{
               // console.log(result.data)
                setPosts(result.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    useEffect(()=>{
        axios.get('/api/posts/randompost')
            .then(result=>{
                //console.log(result.data)
                setRandomPost(result.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    //console.log(posts)

    return (
        <div>

        <Jumbotron >
            <Row>
                <Col className="jumbo_col_ayu text-center"> 
                                   
                    <Image src={`https://picsum.photos/id/105${Math.floor(Math.random()*10)}/300/200`}  fluid rounded width="300" height="200" thumbnail="true"/>
                    
                </Col>
                <Col lg={8} className="jumbo_col_ayu">
                    <h1>{randomPost?.title}</h1>
                    <p>
                        {randomPost?.subtitle}
                    </p>
                    <p>
                        <Link to={"/post/"+randomPost?.id}>
                            <Button className="search_btn">Read more</Button>
                        </Link>
                    </p>
                </Col>
            </Row>           
        </Jumbotron>

        
        <Container>
            <div className="post_wrapper">
                {posts.map(post=>(
                     <PostCard postDetails={post} className="post_card"/>
                ))}
                {/* <PostCard className="post_card"/>
                <PostCard className="post_card"/>
                <PostCard className="post_card"/>
                <PostCard className="post_card"/>

                <PostCard className="post_card"/>
                <PostCard className="post_card"/>
                <PostCard className="post_card"/>
                <PostCard className="post_card"/>
                <PostCard className="post_card"/> */}
            </div>
        </Container>

                    
        </div>
    )
}

export default Home
