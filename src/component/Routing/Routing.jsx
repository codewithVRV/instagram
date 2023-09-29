
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CreatePost from "../CreatePost/CreatePost";
import DeletePage from "../Pages/Home/DeletePage/DeletePage";
import UpdateLikes from "../Pages/Likes/UpdateLikes";

function Routing () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<Home />}/>
            <Route path="/create" element={<CreatePost />}/>
            <Route path="/like/:id" element={<UpdateLikes />}/>
            <Route path="/post/:id" element={<DeletePage />}/>
        </Routes>
    )
}

export default Routing;