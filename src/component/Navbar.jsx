import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div id="navbar">
      <a>
        <Link to="/">Home</Link>
      </a>
      <a>
        <Link to="/login">Login</Link>
      </a>
      <a>
        <Link to="/register">Register</Link>
      </a>
      <a>
        <Link to="/post">Post</Link>
      </a>
    </div>
  )
}

export default Navbar