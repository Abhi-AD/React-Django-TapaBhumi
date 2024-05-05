import React from 'react'
import './World.css'
import { FaGlobe, FaArrowRight, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Images from '../../assests/img/world.png';


const World = () => {
     return (
          <div className='world about_padding'>
               <img src={Images} alt="world1" />
               <div className="world_card">
                    <FaGlobe className='world_card-icon' />
                    <h2>450+</h2>
                    <p>talented people who make up the Leapfrog family</p>
                    <p>Innovating straight out of Nepal, USA, India, Philippines, Mexico and Europe.</p>
                    <Link className='world-link'>
                         <FaLinkedin />
                         <span>see on linkedin</span>
                         <FaArrowRight />
                    </Link>
               </div>
          </div>
     )
}

export default World
