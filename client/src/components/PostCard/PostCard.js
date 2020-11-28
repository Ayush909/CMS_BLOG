import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function PostCard({postDetails}) {

    
    //console.log(postDetails)
    return (      
          
        <Card  className="mb-3 mb-sm-0 mb-sm-3 post_card" style={{width:'18rem'}}>
        <Card.Img variant="top" src={`https://picsum.photos/id/105${Math.floor(Math.random()*10)}/300`} />
        <Card.Body>
            <Card.Text>
                <Link to={"/post/"+postDetails.id}>
                    {postDetails.title}
                </Link>
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default PostCard
