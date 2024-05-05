import React from 'react'
import './ServiceAbout.css'
import servicefooter from '../../../assests/img/Service/servicefooter.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const ServiceAbout = () => {
     return (
          <div className='service-about js-scroll fade-in'>
               <div className="service-about-col">
                    <img src={servicefooter} alt="serviceaboutimage" className='service-about-image' />
               </div>
               <div className="service-about-col">
                    <span className='service-about-col-title'>a partnership like no other</span>
                    <h2 className='service-about-col-header'>Here's what <span>sets us apart</span></h2>
                    <p className="service-about-col-des1">Launching new tech is always hard, but it can at least be straightforward. We prioritize adaptability over lock-in, transparency, and consistent delivery and feedback. We make sure that at all times we have a shared understanding of where we're going, how far we are, what's in our way, and how we're doing.</p>
                    <p className='"service-about-col-des2'>We excel in crafting various AI solutions. Collaborating with us ensures top-tier quality and unwavering commitment to deliver the best.</p>
                    <div className='about-button'>
                         <Link className='about-box' to={`/case-study-details`}>
                              <span>get in touch</span>
                              <FaArrowRight />
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default ServiceAbout
