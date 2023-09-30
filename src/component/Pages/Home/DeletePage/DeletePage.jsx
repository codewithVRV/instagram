import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function DeletePage () {
    const {id} = useParams()
    const navigator = useNavigate()

    async function postDeleted () {
        await axios.delete(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        navigator('/')
        toast.success("Post Deleted Successfully")

    }
    useEffect(() => {

        postDeleted()

    }, [])
    
    return (
        <>
           

        </>
    )
}

export default DeletePage;