import React from 'react'
import './ServiceFooter.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const ServiceFooter = () => {
     return (
          <div className='service-footer js-scroll fade-in'>
               <div className="service-footer-col">
                    <span className="service-footer-col-title">PRODUCT MANAGEMENT PLAYBOOK</span>
                    <h2 className="service-footer-col-header">Join forces with your customers to build defensible products.</h2>
                    <p className='service-footer-col-desc1'>The success of your product lies in the hands of your target users. So, why leave them out of your product development journey?</p>
                    <div className='case-card-button'>
                         <Link className='case-card-box' to={`/service`}>
                              <span>get in touch</span>
                              <FaArrowRight />
                         </Link>
                    </div>
               </div>
               <div className="service-footer-col">
                    <img src="https://img.freepik.com/free-photo/handshake-executives_1232-143.jpg?t=st=1713861283~exp=1713864883~hmac=9349ae30f89cca9122c134379f3abbf953ee2ac18dc82d9f23723d277af42390&w=740" alt="servicefooter" />
               </div>
          </div>
     )
}

export default ServiceFooter
