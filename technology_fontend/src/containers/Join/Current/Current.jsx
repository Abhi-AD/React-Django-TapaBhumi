import React from 'react';
import './Current.css';
import { MdBadge } from 'react-icons/md';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const vacancies = [
    { title: 'Talent Acquisition Associate', location: 'Kathmandu, Nepal' },
    { title: 'Senior Quality Assurance Engineer', location: 'Kathmandu, Nepal' },
    { title: 'Senior Data Engineer', location: 'Kathmandu, Nepal' },
    { title: 'Senior Engineer - VB.Net', location: 'Kathmandu, Nepal' },
    { title: 'Senior Product Designer', location: 'Kathmandu, Nepal' },
    { title: 'Talent Acquisition Associate', location: 'Kathmandu, Nepal' }
];

const recruiters = [
    { name: 'kalpana gautam', role: 'CEO', image: 'https://img.freepik.com/free-photo/portrait-young-beautiful-hipster-girl-trendy-summer-sundress_158538-18256.jpg?t=st=1714040085~exp=1714043685~hmac=55cf7d95e3341a0088b64b77842cb421b49e2c319228c740b71144bea12e59b2&w=826' },
    { name: 'Bibek  Debbarma', role: 'Project Manager', image: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714041442~exp=1714045042~hmac=1076ccd399425df4bb6863a0a6f495a9265f11b66d09f33d2f2fa6bbb9102841&w=900' },
    { name: 'Mohan Kumar  Yadav', role: 'Senior Developer', image: 'https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?t=st=1714041487~exp=1714045087~hmac=78f6925f6d0a4ac2e77c42b722f721c31be1ea99246f05be22a8479a8b1db872&w=740' }
];

const Current = () => {
    return (
        <div className='current'>
            <div className="current-left">
                <div className="current-left-title">
                    <h2 className='current-left-title-header'><span>Current </span>openings</h2>
                    <p className="current-left-title-desc">Do you think you are a good fit? Apply now. We would love to meet you.</p>
                </div>
                <div className="current-left-vaccancy">
                    {vacancies.map((vacancy, index) => (
                        <div className="current-left-vaccancy-list" key={index}>
                            <MdBadge className='vaccancy-icon' />
                            <div className="vaccancy__info">
                                <div className="vaccany-des">
                                    <h3>{vacancy.title}</h3>
                                    <p>{vacancy.location}</p>
                                </div>
                                <Link className='apply-now' to={`/apply-form`}>
                                    <span>apply now</span>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="current-right">
                <div className="current-right-title">
                    <h2>Want to <span>talk in-person?</span></h2>
                    <p>Get in touch with one of our recruitment  leads to discuss further.</p>
                </div>
                {recruiters.map((recruiter, index) => (
                    <div className="person-detail" key={index}>
                        <img src={recruiter.image} alt="img" />
                        <div className="person-detail-des">
                            <h3>{recruiter.name}</h3>
                            <p>{recruiter.role}</p>
                            <div className="person-social">
                                <FaLinkedin />
                                connect on Linkedin
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Current;
