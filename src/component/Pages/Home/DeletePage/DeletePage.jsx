import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function DeletePage () {
    const {id} = useParams()
    const navigator = useNavigate()
    // console.log("id of pariticular post", id)

    async function postDeleted () {
        await axios.delete(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        navigator('/')
        toast.success("Post Deleted Successfully")
        // console.log("response of a particular post", response.data.id)

    }
    useEffect(() => {

        postDeleted()

    }, [])
    
    return (
        <>
            {/* <h1>Data Deleted</h1>
            <h2>id of Particular post: {id}</h2> */}

        </>
    )
}

export default DeletePage;