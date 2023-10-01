import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateLikes () {
    const {id} = useParams()
    const [newLike, setNewLike] = useState(0)
    const navigator = useNavigate()

    async function likeIncrement () {
        const response = await axios.put(`https://dummyapi.io/data/v1/post/${id}`, {
            likes: ((newLike == 0) ? 0 : newLike + 1),
        },
         {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        console.log("response like", response.data)
        setNewLike(response.data.likes)
        navigator('/')
        console.log("newLikes is", newLike)
        
    }

    useEffect(() => {
        likeIncrement()
    }, [])
    return (
        <h1>Update Likes here {newLike}</h1>
        
    )
}
export default UpdateLikes;