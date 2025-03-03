import Home from "./Home.jsx"
import Post from "./Post.jsx"
import Register from "./Register.jsx"
import Login from "./Login.jsx"

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <h1>Welcome to the Green Scene </h1>

      <Routes>
        <Route path='/' element={<Home />}/>
        {/* ROUTES HERE */}
      </Routes>
    </>
  )
}

export default App