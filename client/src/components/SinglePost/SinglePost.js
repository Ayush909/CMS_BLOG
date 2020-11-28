import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import {WhatsappShareButton,WhatsappIcon,FacebookShareButton,FacebookIcon} from 'react-share'
import axios from 'axios'
import './SinglePost.css'

function SinglePost(props) {

    console.log(window.location.href)
    const [detail,setDetail] = useState(null)
    const postId = props.match.params;
    console.log(props.match.params)
    useEffect(()=>{
        axios.get(`/api/posts/${postId.id}`)
            .then(result=>{
               setDetail(result.data)
               
            })
            .catch(err=>{
                console.log(err)
            })

    },[])

    const [randomPic,setRandomPic] = useState(null)

    useEffect(()=>{
        axios.get(`https://randomuser.me/api/`)
            .then(result=>{
               console.log(result.data.results[0].picture.thumbnail)
               setRandomPic(result.data.results[0].picture.thumbnail)
            })
            .catch(err=>{
                console.log(err)
            })

    },[])

    console.log(detail)
    return (
        <Container>
           {detail ? 
                
            <Container style={{margin:'40px auto'}}>
                <h1 className="singlePost_title">{detail.title}</h1> <h6>{detail.category.name}</h6>
              <h4><span className="singlePost_subtitle">{detail.subtitle}</span></h4>
                <div className="author_info">
                    <Image src={randomPic ? randomPic : `https://miro.medium.com/fit/c/56/56/1*u3qUiF4pX-eU3QHxIljc3w.jpeg`}/>
                    <span>{detail.author}</span>
                </div>
                
                <p style={{whiteSpace:'pre-line'}}>
                {detail.body}
                </p>
                <WhatsappShareButton url={window.location.href} title="Hey! Read my new blog" >
                <WhatsappIcon  size={30} round={true}/>
                </WhatsappShareButton>
                <FacebookShareButton url={window.location.href} >
                <FacebookIcon  size={30} round={true}/>
                </FacebookShareButton>
            </Container>

            : 
            
            <h4>Loading...</h4>
            
            }
        </Container>
    )
}

export default SinglePost
