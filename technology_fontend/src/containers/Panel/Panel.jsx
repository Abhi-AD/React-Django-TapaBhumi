import React from 'react'
import { FaCalendarAlt, FaCheckCircle, FaGrin, FaUsers } from "react-icons/fa";
import './Panel.css'
const Panel = () => {
     return (
          <div className="panel_row about_padding">
               <div className="panel_col">
                    <div className="panel_content">
                         <FaCalendarAlt className='panel_icon' />
                         <div>
                              <h2 className='panel_heading'>13+</h2>
                              <p className='panel_text'>Years of operation</p>
                         </div>
                    </div>
               </div>
               <div className="panel_col">
                    <div className="panel_content">
                         <FaUsers className='panel_icon' />
                         <div>
                              <h2 className='panel_heading'>450+</h2>
                              <p className='panel_text'>Skilled professionals</p>
                         </div>
                    </div>
               </div>
               <div className="panel_col">
                    <div className="panel_content">
                         <FaCheckCircle className='panel_icon' />
                         <div>
                              <h2 className='panel_heading'>77</h2>
                              <p className='panel_text'>Net promoter score</p>
                         </div>
                    </div>
               </div>
               <div className="panel_col">
                    <div className="panel_content">
                         <FaGrin className='panel_icon' />
                         <div>
                              <h2 className='panel_heading'>150+</h2>
                              <p className='panel_text'>Happy clients</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Panel
