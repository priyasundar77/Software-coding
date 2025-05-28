import React from 'react'
import banner from '../assets/banner.jpg';
import {Link} from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home' style ={{backgroundImage:`url(${banner})`}}>
        <div className="headerContainer">
            <h4> Gadgets</h4>
            
            <Link to='/products'>
            <button>Order Now
            </button>              
          
          </Link>

            </div> 
      
    </div>
  )
}

export default Home
