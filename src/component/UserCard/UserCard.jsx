import './UserCard.css'

function UserCard ({lname, pic}) {

    return (
        <>
                <div className="users">
                    <img src={pic} alt="" />
                    <p>{lname + "@" + Math.floor(Math.random() * 1000)}</p>
                </div>
                
        
        </>
    )
}

export default UserCard;