import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header () {
    const navigator = useNavigate()

    function homePage () {
        navigator('/')
    }
    function createPost () {
        navigator('/create')
    }

    return (
        <>
            <div className="header-wrapper">
                <div className="logo" onClick={homePage}>
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />
                </div>
                <button className='btn' onClick={createPost}>Create Post</button>
            </div>
        </>
    )
}

export default Header;