import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateLikes () {
    const {id} = useParams()
    const [newLike, setNewLike] = useState({})
    async function likeIncrement () {
        const response = await axios.put(`https://dummyapi.io/data/v1/post/${id}`, {
            likes: newLike.likes + 1,
        },
         {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        
        setNewLike({...response.data})
        console.log("newLIkes", newLike)
    }

    useEffect(() => {
        likeIncrement()
    }, [])
    return (
        <h1>Update Likes here</h1>
        
    )
}
export default UpdateLikes;