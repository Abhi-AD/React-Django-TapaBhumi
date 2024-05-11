import React from 'react';
import './Connect.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Connect = () => (
     <div className='connect'>
          <h2>Ready to get started?</h2>
          <div className='connect__row'>
               <div className='connect__row-card-left js-scroll fade-in'>
                    <h3 className='connect__row-card-infoys-header'>Build with us</h3>
                    <div className='connect__row-card-infoys-des'>
                         <p className='connect__row-card-infoys-des-top'>
                              You need to move faster. You have napkin sketches that need to be fleshed out and realized. You need to reinvent your business to compete.
                         </p>
                         <p className='connect__row-card-infoys-des-button'>
                              We bring startup speed and agility, and enterprise quality and scale. We'd love to learn and share more.
                         </p>
                    </div>
                    <div className='connect__row-card-button'>
                         <Link className='connect__row-card-box'>
                              <span>get started</span>
                              <FaArrowRight />
                         </Link>
                    </div>
               </div>
               <div className='connect__row-card-right js-scroll fade-in'>
                    <h3 className='connect__row-card-infoys-header'>Join us</h3>
                    <div className='connect__row-card-infoys-des'>
                         <p className='connect__row-card-infoys-des-top'>
                              You are excited by emerging technology. You dream about building new things alongside great companies. You are driven to be a master of your craft.
                         </p>
                         <p className='connect__row-card-infoys-des-button'>
                              We bring brilliant like-minded peers to innovate, learn, and grow with. Let's connect.
                         </p>
                    </div>
                    <div className='connect__row-card-button'>
                         <Link className='connect__row-card-box' to={'/join'} >
                              <span>JOIN LEAPFROG</span>
                              <FaArrowRight />
                         </Link>
                    </div>
               </div>
          </div>
     </div>
);

export default Connect;
