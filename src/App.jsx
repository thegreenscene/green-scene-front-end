import Home from "./component/Home.jsx"
import Post from "./component/Post.jsx"
import Register from "./component/Register.jsx"
import Login from "./component/Login.jsx"
import Navbar from "./component/Navbar.jsx"
import Details from "./component/Details.jsx"

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/items/:id' element={<Details />}/>
      </Routes>
    </>
  )
}

export default App