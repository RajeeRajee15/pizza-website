import React from 'react'
import logo from '../assets/img/logo.png';
import '../assets/mystyle.css'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
   <>
  <div className=''>
  <nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container">

    <div className='className="navbar-brand text-light'>
      <Link to= "/">
    <img src={logo} alt="logo" className='nav-logo'/>
    </Link>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><i class="ri-menu-line "></i></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <div className=' ms-auto mb-2'>
        <Link to='/contact'>
        <button className="btn mt-2" type="#">Contact Us</button>
        </Link>
        </div>
    </div>
  </div>
</nav>
</div>

   </>
  )
}

export default NavBar