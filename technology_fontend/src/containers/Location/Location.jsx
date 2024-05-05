import React from 'react';
import './Location.css';
import { Austin, Geneva, Kathmandu, Pune, Seattle } from './import';

const Location = () => {
     return (
          <div className='location'>
               <h2 className='location_title'>We're happy to <span>chat in person</span> if you're close to one of our <span>office locations.</span></h2>
               <div className="location_grid">
                    <div className="col_location js-scroll fade-in">
                         <img src={Seattle} alt="Seattle" />
                         <div className="post-card_location">
                              <h3>Seattle</h3>
                              <p>1335 N Northlake Way Seattle WA 98103</p>
                         </div>
                    </div>
                    <div className="col_location js-scroll fade-in">
                         <img src={Kathmandu} alt="Kathmandu" />
                         <div className="post-card_location">
                              <h3>Kathmandu</h3>
                              <p>Charkhal Rd, Dillibazar Kathmandu, Nepal 44660</p>
                         </div>
                    </div>
                    <div className="col_location js-scroll fade-in">
                         <img src={Austin} alt="Austin" />
                         <div className="post-card_location">
                              <h3>Austin</h3>
                              <p>12600 Hill Country Blvd Austin TX 78738</p>
                         </div>
                    </div>
                    <div className="col_location js-scroll fade-in">
                         <img src={Geneva} alt="Geneva" />
                         <div className="post-card_location">
                              <h3>Geneva</h3>
                              <p>Impact Hub Geneva Rue Fendt 1, 1201 Geneva Switzerland</p>
                         </div>
                    </div>
                    <div className="col_location js-scroll fade-in">
                         <img src={Pune} alt="Pune" />
                         <div className="post-card_location">
                              <h3>Pune</h3>
                              <p>Office No.: 03-122, WeWorkEleven West, Pan Card Club Road Baner, Pune 411045</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Location;
