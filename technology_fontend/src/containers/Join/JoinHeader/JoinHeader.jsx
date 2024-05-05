import React from 'react'
import './JoinHeader.css'
import joinheader from '../../../assests/img/joinheader.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const JoinHeader = () => {
  return (
    <div className='join-header'>
      <div className="join-header-title">
        <h1 className='join-header-title-header'>careers</h1>
        <p className='join-header-title-title'>Growth mindset. Curious. Innovative.<br /><span>Sounds like you?</span></p>
      </div>
      <div className="join-header-body">
        <div className="join-header-body-col">
          <p className="join-header-body-col-title1">We welcome people with a relentless passion, an agile mindset, and a fast-learning culture</p>
          <p className="join-header-body-col-title2">Embark on a journey that goes beyond just a job. At Leapfrog, you will get an environment that fosters growth, learning, and collaboration. A place which values diverse perspectives, accountable freedom, pushes you to reach your new height, and celebrates both small and big wins.</p>
          <div className='case-card-button'>
            <span className='request'>👋 We're hiring!</span>
            <Link className='case-card-box' to={`/case-study-details`}>
              <div class="icon-text-container">
                <span>get in touch</span>
                <FaArrowRight className='' />
              </div>
            </Link>
          </div>
        </div>
        <div className="join-header-body-col">
          <img src={joinheader} alt="" className='serviceheader' />
        </div>
      </div>
    </div>
  )
}

export default JoinHeader
