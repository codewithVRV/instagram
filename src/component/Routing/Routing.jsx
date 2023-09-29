
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import CreatePost from "../CreatePost/CreatePost";

function Routing () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<Home />}/>
            <Route path="/create" element={<CreatePost />}/>
        </Routes>
    )
}

export default Routing;