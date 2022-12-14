import React from 'react'
import {Link} from 'react-router-dom'
const  Navbar=()=> {
  return (
    <nav>
    <div class="nav-wrapper white">
      <Link to="#" class="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create Post</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar