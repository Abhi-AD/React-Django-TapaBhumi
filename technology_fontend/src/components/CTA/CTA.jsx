import React from 'react'
import './CTA.css'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';

import design_discovery from '../../assests/img/design-discovery.png'
import invincible_approach from '../../assests/img/invincible-approach.png'
import devops from '../../assests/img/devops.png'

const CTA = () => {
     return (
          <div className='section-panel cta_padding'>
               <div className="container CTA1">
                    <div className="section-title">
                         <h2>See what <span className='section_title_base'>we are thinking</span></h2>
                         <p className='fs-lead'>We're not just doers, we're tinkerers and thinkers obsessed with building new things in better ways. Read some of
                              our insights,
                              download our playbooks
                         </p>
                    </div>
                    <div className="row">
                         <div className="col js-scroll fade-in">
                              <img src={design_discovery} alt="" />
                              <p className='desc'>Guide to a bulletproof design sprint aligning the goals of clients and end-users.</p>
                              <span className='button'>
                                   <FaFilePdf className='fa' /><p className='icon_text'>Get the book</p><FaArrowRight className='fa' />
                              </span>
                         </div>
                         <div className="col js-scroll fade-in">
                              <img src={invincible_approach} alt="" />
                              <p className="desc">The product development roadmap that enables companies small or large build defensible digital products.</p>
                              <span className='button'>
                                   <FaFilePdf className='fa' /><p className='icon_text'>Get the book</p><FaArrowRight className='fa' />
                              </span>
                         </div>
                         <div className="col js-scroll fade-in">
                              <img src={devops} alt="" />
                              <p className="desc">Drills down the basics about what DevOps is and how you should be following a DevOps culture.</p>
                              <span className='button'>
                                   <FaFilePdf className='fa' /><p className='icon_text'>Get the book</p><FaArrowRight className='fa' />
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default CTA
