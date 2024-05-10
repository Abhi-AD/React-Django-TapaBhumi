import React, { useEffect, useState } from 'react'
import './ApplyForm.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import {  FaLocationDot } from "react-icons/fa6";
import { dateFormate } from '../../../utils/dateFormate';
import { FaRegCalendar, FaRupeeSign } from 'react-icons/fa';
const ApplyForm = () => {
     const [activeTab, setActiveTab] = useState('Job');

     const openItem = (itemname) => {
          setActiveTab(itemname);
     };
     const { id } = useParams();
     const [post, setPost] = useState(null);
     useEffect(() => {
          axios.get(`http://127.0.0.1:8000/api/visit/jobvacancy/${id}/`)
               .then(response => {
                    setPost(response.data);
               })
               .catch(error => {
                    console.error('Error fetching data: ', error);
               });
     }, [id]);


     return (
          <div>
               {post && (
                    <div className="apply-form-title">
                         <h1 className='job_title'>{post.vacancy_title}</h1>
                         <p className='job_location'><FaLocationDot size={20} />{post.location}</p>
                         <div className="job_footer">
                              <p className='job_salary'><FaRupeeSign size={20} />{post.vacancy_salary}</p>
                              <p className='job_date'><FaRegCalendar size={20} />{dateFormate(post.post_date)}</p>
                         </div>
                    </div>
               )}
               <div className='apply-form'>
                    <div className="apply-form-header">
                         <div className="apply-form-link">
                              <Link className={activeTab === 'Job' ? 'switch-button active' : "switch-button"} onClick={() => {
                                   openItem('Job');
                              }}>Job details</Link>
                              <Link className={activeTab === 'JobForm' ? 'switch-button active' : "switch-button"} onClick={() => {
                                   openItem('JobForm');
                              }}>Apply</Link>
                         </div>
                    </div>



                    <div id="JobForm" className="apply-form-data" style={{ display: activeTab === 'JobForm' ? 'block' : 'none' }}>
                         <div className='apply-form-data-field'>
                              <span>CV or resume</span>
                              <p>Upload your CV or resume file</p>
                              <div className="filed-input">
                                   <input type="file" />
                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         <div className='apply-form-data-field'>
                              <span>My information</span>
                              <p>Fill out the information below.</p>

                              <div className="inputdata">
                                   <span>Full name</span>
                                   <input type="text" placeholder='Full name' />
                              </div>
                              <div className="inputdata">
                                   <span>Email address</span>
                                   <input type="email" placeholder='Your email address' />
                              </div>
                              <div className="inputdata">
                                   <span>Full name</span>
                                   <div className="inputdata-input">
                                        <button className='phonebutton'>Nepal</button>
                                        <input type="tel" placeholder='+977 ' />
                                   </div>
                              </div>

                              <p>Photo</p>
                              <div className="filed-input">
                                   <input type="file" />
                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         <div className='apply-form-data-field'>
                              <span>Cover Letter</span>
                              <p>Upload your Cover letter</p>
                              <p className='question-title'>Photo</p>
                              <div className="filed-input">
                                   <input type="file" />
                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         <div className='apply-form-data-field'>
                              <span>Questions</span>
                              <p>Please fill in additional questions</p>

                              <div className="question">
                                   <p className='question-title'>Are you fine relocating to Pune?</p>
                                   <div className="answeropetion">
                                        <label className='text'>
                                             <input type="radio" name="relocate" value="yes" className="radio" />
                                             Yes
                                        </label>
                                        <label className='text'>
                                             <input type="radio" name="relocate" value="no" className="radio" />
                                             No
                                        </label>
                                   </div>
                              </div>

                              <div className="question">
                                   <p className='question-title'>Are you fine relocating to Pune ?</p>
                                   <input type="text" className='text' />
                              </div>
                         </div>
                         <div className="submit-button-container">
                              <button type="submit" className="submit-button">Submit</button>
                         </div>
                    </div>

                    {post && (
                         <div id='Job' className="apply-form-data" style={{ display: activeTab === 'Job' ? 'block' : 'none' }}>
                              <div className='job-desc'>
                                   <h3 className='job-desc-header'>Job description</h3>
                                   <div className="job-desc-box">
                                        <strong className='job-desc-topics'>About Leapfrog</strong>
                                        <p className='job-desc-topics'>{post.vacancy_des} </p>
                                   </div>
                                   <div className="job-desc-box">
                                        <strong className='job-desc-topics'>About the role</strong>
                                        <p className='job-desc-topics'>{post.roles} </p>
                                   </div>
                                   <div className="job-desc-box">
                                        <strong className='job-desc-topics'>Job requirements</strong>
                                        <p className='job-desc-topics'>{post.vacancy_requirements} </p>
                                   </div>
                                   <div className="job-desc-box">
                                        <strong className='job-desc-topics'>Job requirements Skills:</strong>
                                        <p className='job-desc-topics'>{post.vacancy_skills} </p>
                                   </div>
                              </div>
                         </div>
                    )}

               </div>
          </div>
     )
}

export default ApplyForm
