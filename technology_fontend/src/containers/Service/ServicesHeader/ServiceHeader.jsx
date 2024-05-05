import React from 'react'
import './ServiceHeader.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import serviceheader from '../../../assests/img/Service/serviceheader.png'
const ServiceHeader = () => {
     return (
          <div className='services-header'>
               <div className="services-header-col">
                    <h1 className="services-header-col-title">products & technology</h1>
                    <p className="services-header-col-header">
                         <span>Innvoation </span><br />
                         Reliably<br /> delivered.
                    </p>
                    <p className="services-header-col-des1">Building the right product is hard. Technology-driven transformations are risky. At Leapfrog, we use modern methods to systematically produce products and technology that win.</p>
                    <p className="services-header-col-des2">We design and develop by learning about your business and technology needs, validating the riskiest assumptions upfront, and rapidly launching and refining until we succeed together. In our experience, this approach helps produce digital products and solutions that are viable and scalable.</p>

                    <div className='case-card-button'>
                         <Link className='case-card-box' to={`/case-study-details`}>
                              <div class="icon-text-container">
                                   <span>get in touch</span>
                                   <FaArrowRight className='' />
                              </div>
                         </Link>
                    </div>
               </div>
               <div className="services-header-col">
                    <img src={serviceheader} alt="serviceheader" className='serviceheader' />
               </div>
          </div>
     )
}

export default ServiceHeader
