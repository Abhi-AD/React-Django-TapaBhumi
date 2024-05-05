import React from 'react'
import { FaMattressPillow } from 'react-icons/fa6'
import { MdOutlineCelebration,MdLockOpen, MdEmojiEmotions, MdCrueltyFree  } from "react-icons/md";

const JoinService = () => {
     return (
          <div className='service-innovation'>
               <div className="service-innovation-title">
                    <h2 className='service-innovation-title-header'>Values that <span> shape us</span></h2>
                    <p className='service-innovation-title-desc'>Our values are not just words on paper – they're the beating heart of who we are. They define our vibrant culture and guide us in everything we do.</p>
               </div>
               <div className="service-innovation-row js-scroll fade-in">
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><MdEmojiEmotions fontSize={30} /></span>
                         <h3>Customer Focuslearning</h3>
                         <p>Go the extra mile to make our customers smile</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><MdCrueltyFree fontSize={30} /></span>
                         <h3>Accountable Freedom</h3>
                         <p> Keep integrity at heart</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><FaMattressPillow fontSize={30} /></span>
                         <h3>Be Remarkable</h3>
                         <p>Shape a better tomorrow as learn-it-alls</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><MdOutlineCelebration  fontSize={30} /></span>
                         <h3>Celebrate Efforts</h3>
                         <p>Value and celebrate small and big wins together</p>
                    </div>
                    <div className="service-innovation-col">
                         <span className='service-innovation-icon'><MdLockOpen fontSize={30} /></span>
                         <h3>Embrace Openness</h3>
                         <p>Foster a culture of facing problems head-on</p>
                    </div>
               </div>
          </div>
     )
}

export default JoinService
