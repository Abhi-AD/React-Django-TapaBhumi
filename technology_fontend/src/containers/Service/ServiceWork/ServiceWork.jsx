import React from 'react'
import './ServiceWork.css'
import { FaBuilding, FaProjectDiagram } from "react-icons/fa";
import servicework from '../../../assests/img/Service/servicework.png'
import { FaMattressPillow } from 'react-icons/fa6';
const ServiceWork = () => {
     return (
          <div className='service-work'>
               <div className="service-work-title">
                    <h2 className='service-work-title-header'>How we <span>work together</span></h2>
                    <p className='service-work-title-desc'>When we design, diagram, and plan well the right code falls out of our fingers naturally. That's why we don't jump into coding immediately without discovery.</p>
                    <img src={servicework} alt="servicework" className='servicework' />

                    <div className="service-work-innovation-row js-scroll fade-in">
                         <div className="service-work-innovation-col">
                              <span className='service-work-innovation-icon'><FaProjectDiagram fontSize={30} /></span>
                              <h3>Keep learning</h3>
                              <p>We believe every innovation cycle begins with better understanding your business, its goals, and your users’ problems. We use techniques that allow us to identify, design, and validate solutions as quickly as possible.</p>
                         </div>
                         <div className="service-work-innovation-col">
                              <span className='service-work-innovation-icon'><FaBuilding fontSize={30} /></span>
                              <h3>build faster</h3>
                              <p>We leverage the best of modern engineering practices and cloud services to move fast without breaking things. Our goal is to hypothesize and build new things that always work as expected, and that are ready to adapt and scale.</p>
                         </div>
                         <div className="service-work-innovation-col">
                              <span className='service-work-innovation-icon'><FaMattressPillow fontSize={30} /></span>
                              <h3>Measure everything</h3>
                              <p>We crave available and immediate feedback for everything we deliver together. That feedback is the compass that lets us know what’s working, what’s not, and where to go next. We employ tools and tech that foster a culture of always moving the right direction.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ServiceWork
