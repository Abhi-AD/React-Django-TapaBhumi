import React from 'react';
import './Parnter.css';
import parnter from '../../assests/img/parnter.png';
import { FaArrowRight } from 'react-icons/fa';

const Parnter = () => {
    return (
        <div className='container parnterbg'>
            <div className="parnter_content">
                <img src={parnter} alt="parnter" className='parnter js-scroll fade-in' />
                <div className="parnter_infos">
                    <span className='parnter_info-title'>the technology difference</span>
                    <h2 className='parnter_info-header'>We strive to be a <span style={{ color: 'var(--main-color)' }}>better technology partner.</span></h2>
                    <p className='title_info'>At our core, we are 450 people obsessed with innovating with technology in the right ways.</p>
                    <p className='des_parnter'>We are 100% oriented around solving your problems and making you successful. If you need skilled people, we make sure they have the talent and nature to plug right into your team. When you have a job for us, we move mountains to make sure it's done well and on time. We pride ourselves on earning your trust, providing demonstrable value, and being great at what we do - together.</p>
                    <div className="parnter_icon">
                        <span style={{paddingRight:'10px'}}>Learn more</span>
                        <FaArrowRight className='fa' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parnter;
