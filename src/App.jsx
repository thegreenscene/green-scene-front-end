import Home from "./component/Home.jsx"
import Post from "./component/Post.jsx"
import Register from "./component/Register.jsx"
import Login from "./component/Login.jsx"
import Navbar from "./component/Navbar.jsx"

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        {/* ROUTES HERE */}
      </Routes>
    </>
  )
}

export default App