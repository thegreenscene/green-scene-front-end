import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/post">Post</Link>
    </div>
  )
}

export default Navbar