import './UserCard.css'

function UserCard ({ lastName, picture, id }) { 


    return (
        
                 <div className="users">
                    <img src={picture} alt="" />
                    <p>{lastName + "@" + Math.floor(Math.random() * 1000)}</p>
                </div>

    )
}

export default UserCard;