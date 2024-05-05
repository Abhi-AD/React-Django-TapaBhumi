import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css'
import aboutImage from '../../assests/img/about.png';

const Hero = () => {
     return (
          <div className="hero_about-row about_padding">
               <div className="col-about">
                    <h2>About us</h2>
                    <p className='about-header'> <span>Innovation</span> is in our DNA.</p>
                    <p className="about-des1">We stand as an experienced and trustworthy technology ally, ready to help with your next venture.</p>
                    <p className="about-des2">Leapfrog, formed by a team of seasoned founders, CTOs, product designers, and engineers, has grown to a workforce of 450 strong. Over the past decade, we've been instrumental in delivering over a 100 new products. We've forged partnerships with a wide variety of innovative startups and enterprises, building solutions that needed to blend a user-friendly interface with the intricate aspects of data, cloud, and security.</p>
                    <Link to="/contact" className='about-link'><span>Build With us</span><FaArrowRight /></Link>
               </div>
               <div className="col-about">
                    <img src={aboutImage} alt="aboutpic" />
               </div>
          </div>
     )
}

export default Hero
