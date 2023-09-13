import React from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="left">
            <h2>Fiverr<span>.</span></h2>
        </div>
        <div className="right">
            <div className="business">Business solutions</div>
            <div className="explore">Explore</div>
            <div className="language"><i className="fa fa-globe"></i>Language</div>
            <Link>Become a Seller</Link>
            <button className="sign_in">Sign In</button>
            <button className="join">Join</button>
        </div>
    </div>
  )
}

export default Navbar