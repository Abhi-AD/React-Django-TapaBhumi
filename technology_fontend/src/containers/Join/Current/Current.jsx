import React, { useEffect, useState } from 'react';
import './Current.css';
import { MdBadge } from 'react-icons/md';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Current = () => {
    const [peoples, setPeoples] = useState([]);
    const [jobvacancys, setJobVacancys] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const peoplesAll = await axios.get('http://127.0.0.1:8000/api/visit/person/');
                const jobvacancysAll = await axios.get('http://127.0.0.1:8000/api/visit/jobvacancy/');
                const peoplesData = peoplesAll.data.slice(0,3);
                const jobvacancysData = jobvacancysAll.data.slice(0,10);
                setPeoples(peoplesData)
                setJobVacancys(jobvacancysData)
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    return (
        <div className='current'>
            <div className="current-left">
                <div className="current-left-title">
                    <h2 className='current-left-title-header'><span>Current </span>openings</h2>
                    <p className="current-left-title-desc">Do you think you are a good fit? Apply now. We would love to meet you.</p>
                </div>
                <div className="current-left-vaccancy">
                    {jobvacancys.map(jobvacancy => (
                        <div key={jobvacancy.id} className="current-left-vaccancy-list">
                            <MdBadge className='vaccancy-icon' />
                            <div className="vaccancy__info">
                                <div className="vaccany-des">
                                    <h3>{jobvacancy.vacancy_title}</h3>
                                    <p>{jobvacancy.location}</p>
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
                {peoples.map(people => (
                    <div className="person-detail">
                        <img src={people.image} alt="img" />
                        <div className="person-detail-des">
                            <h3>{people.name}</h3>
                            <p>{people.post}</p>
                            <Link className="person-social" to={`${people.url}`}>
                                <FaLinkedin />
                                connect on Linkedin
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Current;
