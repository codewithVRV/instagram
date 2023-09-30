import { useContext, useState } from "react";
import Header from "../Header/Header";
import '../CreatePost/CreatePost.css'
import axios from 'axios';
import PostCardContex from "../providers/PostsProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreatePost () {
    const [postName, setPostName] = useState("");
    const [imageName, setImageName] = useState("");
    const {posts, setPosts} = useContext(PostCardContex)
    const navigator = useNavigate();

    async function postCreate () {
        const response = await axios.post('https://dummyapi.io/data/v1/post/create', {
                owner : '60d0fe4f5311236168a109dd',
                image : imageName,
                text: postName,
                likes: Math.floor(Math.random() * 1000)
        }, 
        {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        setPosts([response.data, ...posts])
        navigator('/')
        toast.success("Update Post Successfully")
        setImageName("")
        setPostName("")
    }
    return (
        <>
            <Header />
            <div className="input-wrapper">
                <input type="text" value={postName}  onChange={(e) => setPostName(e.target.value) } placeholder="Enter Post Title here.."/>
                <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="Enter the Url of image.."/>
                <button className="btn1" onClick={postCreate}>Submit</button>
            </div>
        </>
    )
}

export default CreatePost;