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
        setUserData([...response.data.data])
    }


    useEffect(() => {
        downloadAllUserData()
    }, [])

    return (
        <div className="card-list">
                {(userData.length == 0) ? "Loading" : userData.map((user) => <UserCard 
                
                lastName={user.lastName} picture={user.picture}

                key={user.id} />)}
        </div>
    )   
}


export default UserCardList;