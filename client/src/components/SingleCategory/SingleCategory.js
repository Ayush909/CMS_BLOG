import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Jumbotron, Row, Spinner } from 'react-bootstrap'
import PostCard from '../PostCard/PostCard'
import axios from 'axios'

function SingleCategory(props) {

    const [posts,setPosts] = useState([])
    const [category,setCategory] = useState(null)
    //console.log(props.match.params)
    
    useEffect(()=>{
        axios.get(`/api/posts/catpost/${props.match.params.id}`)
        .then(result=>{
            console.log(result.data)
            setPosts(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        axios.get(`/api/categories/${props.match.params.id}`)
        .then(result=>{
            console.log(result.data)
            setCategory(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
        { posts.length > 0 && category != null ? 
        <>
        <Jumbotron >
            <Row>
                <Col className="jumbo_col_ayu text-center"> 
                <h2>{category?.name}</h2>
                </Col>
            </Row>           
        </Jumbotron>

        
        <Container>
            <div className="post_wrapper">
                {posts.map(post=>(
                     <PostCard postDetails={post} className="post_card"/>
                ))}                
            </div>
        </Container>
        </>
        :
        <div className="myloader">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>

        }
        </div>
    )
}

export default SingleCategory
