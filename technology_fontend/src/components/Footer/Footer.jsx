import React, { useState } from 'react';
import './Footer.css';
import { footer_button, lf_logo_white } from './imports';
import { FaCodeBranch, FaFacebook, FaGraduationCap, FaInstagram, FaLinkedin, FaPodcast, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/visit/subscriber/', { email });

            if (response.status === 201) {
                alert("You've successfully subscribed to our newsletter!");
                setEmail('');
            }
        } catch (error) {
            if (error.response.status === 400 && error.response.data.detail === "Email already subscribed.") {
                alert("Email is already subscribed.");
            } else {
                alert('Please provide a valid email address.');
            }
            setEmail('');
        }
    };

    return (
        <div className='footer'>
            <div className="container footer1">
                <div className="footer_subscription">
                    <span className='title_sub'>Stay in the loop</span>
                    <div className="sub_form">
                        <input
                            type='email'
                            placeholder='Your email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type='button' onClick={handleSubscribe}>
                            Subscribe for updates
                        </button>
                    </div>
                </div>
                <hr className='line' />
                <div className="footer__menu">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={lf_logo_white} alt="lf_logo_white" className='footer_logo' />
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">We are TopaBhumi</h3>
                                <ul>
                                    <li><Link className='link_footer' to='/about'><span>About us</span></Link></li>
                                    <li><Link className='link_footer' to='/resources'><span>Resource</span></Link></li>
                                    <li><Link className='link_footer' to='/case-studies'><span>Case Studies</span></Link></li>
                                    <li><Link className='link_footer' to='/security-compliance'><span>Security and Compliance</span></Link></li>
                                    <li><Link className='link_footer' to='/contact'><span>Contact Us</span></Link></li>
                                    <li><Link className='link_footer' to='/blog'><span>Blog</span></Link></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <h3 className="footer_title">Work With Us</h3>
                                <ul>
                                    <li><Link className='link_footer' to='/careers'><span>Careers</span></Link></li>
                                    <li><Link className='link_footer' to='/fellowship'><span>Fellowship</span></Link></li>
                                    <li><Link className='link_footer' to='/life-at-TopaBhumi'><span>Life at TopaBhumi</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">What We Do</h3>
                                <ul>
                                    <li><Link className='link_footer' to='/products'><span>Products & Technology</span></Link></li>
                                    <li><Link className='link_footer' to='/team-augmentation'><span>Team Augmentation</span></Link></li>
                                    <li><Link className='link_footer' to='/design'><span>Design</span></Link></li>
                                    <li><Link className='link_footer' to='/data-and-ai'><span>Data and AI</span></Link></li>
                                    <li><Link className='link_footer' to='/devops-and-cloud'><span>DevOps & Cloud</span></Link></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <h3 className="footer_title">Industries</h3>
                                <ul>
                                    <li><Link className='link_footer' to='/healthtech'><span>Healthtech</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">Connect with Us</h3>
                                <ul>
                                    <li><Link className='link_footer' to='/podcast'><FaPodcast className='icons' /><span>Podcast</span></Link></li>
                                    <li><Link className='link_footer' to='/facebook'><FaFacebook className='icons' /><span>Facebook</span></Link></li>
                                    <li><Link className='link_footer' to='/instagram'><FaInstagram className='icons' /><span>Instagram</span></Link></li>
                                    <li><Link className='link_footer' to='/linkedin'><FaLinkedin className='icons' /><span>LinkedIn</span></Link></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <ul>
                                    <li><Link className='link_footer' to='/topabhmi-brand'><FaCodeBranch className='icons' /><span>TopaBhumi Brand</span></Link></li>
                                    <li><Link className='link_footer' to='/education-mission'><FaGraduationCap className='icons' /><span>Education Mission</span></Link></li>
                                    <li><Link className='link_footer' to='/student-partnership'><FaUserFriends className='icons' /><span>Student Partnership</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='line' />
                <div className="footer__copyright">
                    <img src={footer_button} alt="footer_button" className='footer_button' />
                    <p className='footer_copyright_text'>Copyright, TopaBhumi Technology Inc. </p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Data Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
