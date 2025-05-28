import React, { useState } from 'react'
import logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
const Navbar = () => {
  const [showLinks, setshowLinks]=useState(false)
  function Click()
  {
    setshowLinks(showLinks);
  }
  return (
    <div className="navbar">  
    
    
    <div className="leftside">
        <img src={logo}/>
    <div className="hiddenlinks">
      <Link to="/" >Home</Link>
      <Link to="/products" >Product</Link>
      <Link to="/abouts" >About</Link>
      <Link to="/contacts" >Contact Us</Link>
    </div>
    </div>
    <div className="rightside">
      <Link to="/" >Home</Link>
      <Link to="/products" >Product</Link>
      <Link to="/abouts" >About</Link>
      <Link to="/contacts" >Contact Us</Link>
      <button> 
        <ReorderIcon/>
        </button>

    </div>
    </div>

  )
}

export default Navbar
