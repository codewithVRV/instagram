import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import axios from 'axios';

import './PostCardList.css'
import { useNavigate, useParams } from "react-router-dom";


  

function PostCardList () {

    const [postData, setPostData] = useState([])
    const {id} = useParams()
    const [newLike, setNewLike] = useState(0)
    const navigator = useNavigate()

    async function downloadAllPost () {
        const response = await axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        
        setPostData([...response.data.data])
    }

    

    // async function likeIncrement () {
    //     const response = await axios.put(`https://dummyapi.io/data/v1/post/${id}`, {
    //         likes: ((newLike == 0) ? 0 : newLike + 1),
    //     },
    //      {
    //         headers: {
    //             'app-id': import.meta.env.VITE_APP_ID,
    //         }
    //     })
    //     console.log("response like", response.data)
    //     setNewLike(response.data.likes)
    //     navigator('/')
    //     console.log("newLikes is", newLike)
        
    // }

    
    useEffect(() => {
        downloadAllPost()
    }, [])


    return ( 
        <div className="post-wrapper">
            {(postData.length == 0) ? <h1>Posts are Loading...</h1> : postData.map((post) => <PostCard 
        
                key={post.id} fname={post.owner.firstName} lname={post.owner.lastName} img={post.image} 
                pic={post.owner.picture} like={post.likes} date={post.publishDate}
                id={post.id}
                text={post.text}/>)}
        </div>
    
    )
}

export default PostCardList;