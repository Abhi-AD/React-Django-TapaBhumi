import React from 'react'
import './ServiceInnovation.css'
import { FaBuilding, FaProjectDiagram } from "react-icons/fa";
import { FaMattressPillow } from 'react-icons/fa6';
const ServiceInnovation = () => {
     return (
          <div className='service-innovation'>
               <div className="service-innovation-title">
                    <h2 className='service-innovation-title-header'>Innovation that <span>just gets better</span></h2>
                    <p className='service-innovation-title-desc'>In today's world, markets and technology are changing at an accelerated pace, and innovation doesn't have a finish line. Whether you're a startup that wants to conquer the world, or an enterprise that needs to adapt, we harness the best of iterative processes, emerging technology, and data to navigate to success.</p>
               </div>
               <div className="service-innovation-row js-scroll fade-in">
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><FaProjectDiagram fontSize={30} /></span>
                         <h3>Keep learning</h3>
                         <p>We believe every innovation cycle begins with better understanding your business, its goals, and your users’ problems. We use techniques that allow us to identify, design, and validate solutions as quickly as possible.</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><FaBuilding fontSize={30} /></span>
                         <h3>build faster</h3>
                         <p>We leverage the best of modern engineering practices and cloud services to move fast without breaking things. Our goal is to hypothesize and build new things that always work as expected, and that are ready to adapt and scale.</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><FaMattressPillow fontSize={30} /></span>
                         <h3>Measure everything</h3>
                         <p>We crave available and immediate feedback for everything we deliver together. That feedback is the compass that lets us know what’s working, what’s not, and where to go next. We employ tools and tech that foster a culture of always moving the right direction.</p>
                    </div>
               </div>
          </div>
     )
}

export default ServiceInnovation
