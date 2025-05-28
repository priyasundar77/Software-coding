import React from 'react'
import about from '../assets/about.jpg'
import '../styles/About.css'


const About = () => {
  return (
    <div className="about">

    
    <div className="aboutTop" style ={{backgroundImage: `url(${about})`}}></div>

    <div className="aboutBottom">
        <h1>About Us</h1>
        <p>An ecommerce website is an online platform where businesses can sell products or services to customers, facilitating transactions over the internet. It's essentially a digital storefront that allows customers to browse, select, and purchase goods without visiting a physical store. These websites offer
             a convenient way for businesses to reach a wider audience and generate revenue.</p>
    </div>
   </div> 
  )
}

export default About
