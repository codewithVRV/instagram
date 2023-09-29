
import { useState } from 'react'
import './App.css'
import Routing from './component/Routing/Routing'
import PostCardContex from './component/providers/PostsProvider'


function App() {
  const [posts, setPosts] = useState([])

  return (

      <>
        <PostCardContex.Provider value={{posts, setPosts}}>
        <Routing />
        </PostCardContex.Provider>
      </>
  )
}

export default App
