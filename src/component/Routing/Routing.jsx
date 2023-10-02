
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CreatePost from "../CreatePost/CreatePost";
import DeletePage from "../Pages/Home/DeletePage/DeletePage";
import PostCardList from "../PostCardList/PostCardList";



function Routing () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<Home />}/>
            <Route path="/create" element={<CreatePost />}/>
            <Route path="/post/:id" element={<DeletePage />}/>
            <Route path="/like/:id" element={<PostCardList />}/>
        </Routes>
    )
}

export default Routing;