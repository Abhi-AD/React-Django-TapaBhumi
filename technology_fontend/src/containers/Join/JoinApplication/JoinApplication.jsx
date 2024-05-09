import React, { useEffect, useState } from 'react';
import './JoinApplication.css';
import axios from 'axios';



const JoinApplication = () => {
  const [jobaplicationstep, setJobAplicationStep] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/jobapplication/');
        setJobAplicationStep(responseAll.data)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className='job-application'>
      <div className="job-application-title">
        <h1 className="job-application-title-header">Your application <span>journey</span></h1>
        <p className="job-application-title-des">Our hiring process is designed to ensure that both you and Leapfrog are the perfect match for each other. While our process may vary depending on the role, here's an overview of what you can expect when you apply to join our team.</p>
      </div>
      <div className="job-application-row">
        {jobaplicationstep.map(step => (
          <div className="job-application-col">
            <span className='job-application-icon'><img className="stepicon" src={step.image} alt={step.title} /></span>
            <div className="job-application-col-col">
              <div className="job-application-col-col-num">
                <span>Step {step.num}</span>
                <h3>{step.title}</h3>
              </div>
              <p className="job-application-col-col-des">{step.description.substring(0, 150)+'....'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default JoinApplication;
