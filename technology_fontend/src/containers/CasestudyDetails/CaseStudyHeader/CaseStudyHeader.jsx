import React, { useEffect, useState } from 'react';
import './CaseStudyHeader.css';
import { Link, useParams } from 'react-router-dom';
import { FaAirbnb, FaCloudversify } from "react-icons/fa6";
import { MdOutlineDashboard, MdOutlineHorizontalSplit } from 'react-icons/md';
import axios from 'axios';

const CaseStudyHeader = () => {
    const { id } = useParams();
    const [casestudy, setPost] = useState(null);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/visit/casestudy/${id}/`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [id]);
    return (
        <div className="casestudydetails-container">
            {casestudy && (
                <div className="casestudydetails-header">
                    <span className='casestudydetails-top'>
                        <Link to={`/case-study`}>Case Studies</Link>
                    </span>
                    <h1>{casestudy.case_study_title}</h1>
                    <div className="casestudeyheader">
                        <div className="casestudeyheadercol">
                            <p className='casestudeyheadercol-header'>{casestudy.case_study_bio}</p>
                            <p className="casestudeyheadercol-desc">{casestudy.case_study_description}</p>
                            <div className="casestudeyheadercol-footer">
                                <img src="https://www.lftechnology.com/_next/image?url=https%3A%2F%2Fstrapi.lftechnology.com%2Fuploads%2Fcity_of_seattle_d8b50286e8.png&w=256&q=75" alt="caselogo1" />
                                <img src="https://www.lftechnology.com/_next/image?url=https%3A%2F%2Fstrapi.lftechnology.com%2Fuploads%2Flogo_signetic_0ca3d23a1e.png&w=256&q=75" alt="caselogo2" />
                            </div>
                        </div>
                        <div className="casestudeyheadercol">
                            <img className='casestudeyheadercolimg' src={casestudy.case_study_image} alt="caseheder" />
                        </div>
                    </div>

                    <div className="casestudydetails-header-footer">
                        <div className="casestudydetails-header-footer-col">
                            <img src="https://img.freepik.com/free-vector/case-study-flyer-template_23-2149131023.jpg?t=st=1713783154~exp=1713786754~hmac=b3262f0871c81882440431b3898375722e612e70a7d53ca687cf72a551bbca03&w=900" alt="img" />
                        </div>
                        <div className="casestudydetails-header-footer-col">
                            <h3>We paved the way for Seattle to be the first major US city to achieve the 70% vaccination milestone.</h3>
                            <div className="casestudydetails-header-footer-col-deliveries">
                                <span className='casestudydetails-header-footer-col-deliveries-title'>Deliverables</span>
                                <ul className='deliverables'>
                                    <li>
                                        <MdOutlineDashboard className='deliberables-icon' />
                                        <span>Build With us</span>
                                    </li>
                                    <li>
                                        <MdOutlineHorizontalSplit className='deliberables-icon' />
                                        <span>AI</span>
                                    </li>
                                    <li>
                                        <FaCloudversify className='deliberables-icon' />
                                        <span>Cloud</span>
                                    </li>
                                    <li>
                                        <FaAirbnb className='deliberables-icon' />
                                        <span>Design</span>
                                    </li>
                                </ul>
                                <span className='our-impact-title'>our impact</span>
                                <div className="our-impact">
                                    <p className="our-impact-count">44000</p>
                                    <p>vaccine doses administered</p>
                                </div>
                            </div>
                            <div className="our-impact">
                                <p className="our-impact-count">72%</p>
                                <p>vaccination rate achieved for City of Seattle</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CaseStudyHeader;
