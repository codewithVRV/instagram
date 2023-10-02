import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import axios from 'axios';

import './PostCardList.css'


  

function PostCardList () {

    const [postData, setPostData] = useState([])
    

    async function downloadAllPost () {
        const response = await axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        
        setPostData([...response.data.data])
    }

    


    
    useEffect(() => {
        downloadAllPost()
    }, [])


    return ( 
        <div className="post-wrapper">
            {(postData.length == 0) ? <h1>Posts are Loading...</h1> : postData.map((post) => <PostCard 
        
                key={post.id} fname={post.owner.firstName} lname={post.owner.lastName} img={post.image} 
                pic={post.owner.picture} like={post.likes} 
                id={post.id}
                text={post.text}/>)}
        </div>
    
    )
}

export default PostCardList;