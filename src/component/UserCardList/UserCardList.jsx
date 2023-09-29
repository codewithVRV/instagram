import { useEffect, useState } from "react";
import axios from 'axios'
import UserCard from "../UserCard/UserCard";
import './UserCardList.css'


function UserCardList () {
    const [userData, setUserData] = useState([])


    async function downloadAllUserData () {
        const response = await axios.get('https://dummyapi.io/data/v1/user', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID,
            }
        })
        // console.log("response is", response)
        setUserData([...response.data.data])
    }
    // console.log("userData is", userData)


    useEffect(() => {
        downloadAllUserData()
    }, [])

/**
         * firstName
        : 
        "Sara"
        id
        : 
        "60d0fe4f5311236168a109ca"
        lastName
        : 
        "Andersen"
        picture
        : 
        "https://randomuser.me/api/portraits/women/58.jpg"
        title
        : 
        "ms"
 */
    return (
        <div className="card-list">
                {userData.map((user) => <UserCard 
                
                lname={user.lastName} pic={user.picture}

                key={user.id}/>)}
        </div>
    )   
}


export default UserCardList;