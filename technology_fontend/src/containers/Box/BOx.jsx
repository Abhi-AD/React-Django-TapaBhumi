import React from 'react'
import './BOx.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
const BOx = () => {
     return (
          <div className='box'>
               <div className="box-container">
                    <h2 className='box-container-title'>Catch a glimpse of <span>#LifeAtLeapfrog</span></h2>
                    <p className='box-container-des'>At Leapfrog, work is more than just work - it's a thrilling adventure filled with laughter, camaraderie, and endless support. Step into our world and witness the perfect blend of work and fun.</p>
                    <p className="box-container-footer">Step into our world and witness the perfect blend of work and fun.</p>
                    <div className="box-button">
                         <Link className='link-box'>
                              <span>find out more</span>
                              <FaArrowRight />
                         </Link>
                         <Link className='link-box'>
                              <span>See Open Jobs</span>
                              <FaArrowRight />
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default BOx
