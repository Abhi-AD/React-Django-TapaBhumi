import React from 'react'
import './Start.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const Start = () => {
     return (
          <div className='start'>
               <h2 className="start-header">Let's get <span>you started!</span></h2>
               <p className='start-des'>We are looking for people who are ambitious, enjoy collaborating, respect our transparent culture and are ready to give it all. Come, be a part of the team and help us build the future of work.</p>
               <div className="start-footer">
                    <Link className='case-card-box' to={`/case-study-details`}>
                         <div class="icon-text-container">
                              <span>get in touch</span>
                              <FaArrowRight className='' />
                         </div>
                    </Link>
                    <Link className='case-card-box' to={`/case-study-details`}>
                         <div class="icon-text-container">
                              <span>get in touch</span>
                              <FaArrowRight className='' />
                         </div>
                    </Link>
               </div>
          </div>
     )
}

export default Start
