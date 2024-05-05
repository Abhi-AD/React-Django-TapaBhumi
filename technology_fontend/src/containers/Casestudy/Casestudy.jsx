import React from 'react'
import './Casestudy.css'
import { FaArrowRight } from 'react-icons/fa';
import Signetic from '../../assests/img/CaseStudy/Signetic.png'
import Signetic_title from '../../assests/img/CaseStudy/Signetic_title.png'
import Laudio from '../../assests/img/CaseStudy/Laudio.png'
import Laudio_title from '../../assests/img/CaseStudy/Laudio_title.png'
import { Link } from 'react-router-dom';
const Casestudy = () => {
     return (
          <div className='casestudy'>
               <div className="casestudy-title">
                    <h2 className='casestudy-title-header'>We have <span> a proven track record </span>of ambitious products in complex environments.</h2>
                    <p className="casestudy-title-desc1">Since 2010, we've had over 100 fast-growing companies build apps, data-driven products, and cloud solutions that make an impact.</p>
               </div>
               <div className="col_case">
                    <div className="card_case js-scroll fade-in">
                         <img src={Signetic} alt="Signetic1" />
                         <div className="casestudy-card">
                              <img src={Signetic_title} alt="Signetic_title" />
                              <h3>We helped City of Seattle administer 1 million COVID doses to reach 70% full vaccination</h3>
                              <p>We beat Salesforce and Microsoft to be selected by the City of Seattle as the end-to-end vaccination solution that made Seattle become the 1st large US city to reach 70% full vaccinations. This made up King County’s 82% doses.</p>
                              <div className='case-card-button'>
                                   <Link className='case-card-box' to={`/case-study-details`}>
                                        <span>read the story</span>
                                        <FaArrowRight />
                                   </Link>
                              </div>
                         </div>

                    </div>
                    <div className="card_case js-scroll fade-in">
                         <img src={Laudio} alt="Laudio" />
                         <div className="casestudy-card">
                              <img src={Laudio_title} alt="Laudio_title" />
                              <h3>We are leveraging AI and ML to help solve staff burnout at 10+ large hospitals</h3>
                              <p>We build a staff relationship management platform to achieve the vision to help frontline managers influence stronger staff engagement, satisfaction, and retention. </p>
                              <div className='case-card-button'>
                                   <Link className='case-card-box' to={`/case-study-details`}>
                                        <span>read the story</span>
                                        <FaArrowRight />
                                   </Link>
                              </div>
                         </div>

                    </div>

               </div>
          </div>

     )
}

export default Casestudy
