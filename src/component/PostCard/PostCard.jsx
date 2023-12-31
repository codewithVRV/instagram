import { useState } from 'react';
import './PostCard.css'
import { Link } from 'react-router-dom';

function PostCard ({ fname, lname, pic, img, text, like, id }) {

    const [isLiked, setIsLiked] = useState(false)
    const newText = text.substr(0, 15)
    const [newLike, setNewLike] = useState(like)

    function incrementLike () {
        setNewLike(like+1)
    }
    function decrementLike () {
        setNewLike(newLike-1)
    }
    return (
        <>  
            
            <div className="main">
                <div className="upper">
                   
                        <img src={pic} alt=''/>
                        <div>
                            <h5>{fname +" "+ lname}</h5>
                            <p id='user-name'>{fname + "@admin" + Math.floor(Math.random() * 1000)}</p>
                        </div>
                    
                </div>
                
                <img  src={img} alt=''/>
                <h4 id="title">{newText +"..."} </h4>
                <div>
                    <div  className="bottom-section">
                        {(!isLiked) ? 
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                    setIsLiked(!isLiked)
                                    incrementLike()
                                    
                                }} width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setIsLiked(!isLiked)
                                decrementLike()
                            }} width="24" height="24" fill="currentColor" className="bi bi-heart-fill icon" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>  
                        } 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        <Link to={`post/${id}`}>
                        <p className='delete'>Delete</p>
                        </Link>
                    </div>
                <div>
                    
                </div>
                </div>

                <div>
                    <h4 id='likes'>{newLike} likes</h4>
                </div>
            </div>
        </>
    )
}

export default PostCard;