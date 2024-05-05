import React from 'react'
import './Mission.css'
import mission from '../../assests/img/mission.png';
const Mission = () => {
     return (
          <div className='mission'>
               <div className="mission-col js-scroll fade-in">
                    <img src={mission} alt="mission1" />
               </div>
               <div className="mission-col">
                    <div className="mission-col-sticky">
                         <label>Our mission</label>
                         <h2><span>Your success</span> is our mission</h2>
                         <p className="mission-desc1">At Leapfrog, we combine talented people with an unwavering commitment to the success of our customers.</p>
                         <p className="mission-desc2">We are fanatics of how to design, build, and validate new ideas in better ways. We use those learnings to help our customers innovate faster and teams perform better. More than 90% of our business comes through referrals because we've proven time and again that we don't let customers down.</p>
                    </div>
               </div>
          </div>
     )
}

export default Mission
