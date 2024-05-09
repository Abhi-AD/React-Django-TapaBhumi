import React, { useState } from 'react'
import './ApplyForm.css'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
const ApplyForm = () => {
     const [activeTab, setActiveTab] = useState('Job');

     const openItem = (itemname) => {
          setActiveTab(itemname);
     };
     return (
          <div>
               <div className="apply-form-title">
                    <h1 className='job_title'>Senior Developer Senior  </h1>
                    <p className='job_location'><FaLocationDot size={20} />Kathamandu</p>
               </div>
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

                    <div id='Job' className="apply-form-data" style={{ display: activeTab === 'Job' ? 'block' : 'none' }}>
                         <div className='job-desc'>
                              <h3 className='job-desc-header'>Job description</h3>
                              <div className="job-desc-box">
                                   <strong className='job-desc-topics'>About Leapfrog</strong>
                                   <p className='job-desc-topics'>Leapfrog is on a mission to be a role model technology company. Since 2010, we have relentlessly worked on crafting better digital products with our team of superior engineers. We’re a full-stack company specializing in SaaS products and have served over 100 clients with our mastery of emerging technologies. We’re thinkers and doers, creatives and coders, makers and builders— but most importantly, we are trusted partners with world-class engineers. Hundreds of companies in Boston, Seattle, Silicon Valley, and San Francisco choose us to gain speed, agility, quality, and stability, giving them an edge over their competitors.</p>
                              </div>
                              <div className="job-desc-box">
                                   <strong className='job-desc-topics'>About the role</strong>
                                   <p className='job-desc-topics'>As the Senior QA Engineer, you'll spearhead comprehensive testing strategies, leveraging tools like Cypress, Postman, and Mocha, ensuring seamless functionality, usability, and accessibility. Your role extends to crafting meticulous test plans, mentoring teams, and ensuring compliance with acceptance criteria and industry standards. Collaborating with cross-functional teams, you'll drive innovation, optimize testing processes, and champion cutting-edge methodologies for exceptional product quality.</p>
                              </div>
                              <div className="job-desc-box">
                                   <strong className='job-desc-topics'>Job requirements</strong>
                                   <p className='job-desc-topics'>3+ years of extensive experience in QA automation, with a focus on designing and implementing automation frameworks and solutions.
                                        Strong proficiency in programming languages such as Python, Java, or JavaScript, and experience with automation tools like Selenium WebDriver, Cypress, Appium, or Playwright.
                                        Proficiency in test automation frameworks such as JUnit, TestNG, Pytest, or Cucumber
                                        In-depth knowledge of software testing methodologies, best practices, and industry standards.
                                        Extensive experience with Agile development methodologies, CI/CD practices, and integrating automation into the software development lifecycle.
                                        Proficiency in API testing and tools such as Postman or Rest Assured.
                                        Strong analytical and problem-solving skills, with the ability to troubleshoot complex issues and provide innovative solutions.
                                        Excellent leadership and communication skills, with the ability to collaborate effectively with team members, stakeholders, and senior management.
                                        Proven track record of driving process improvements and implementing innovative approaches to enhance the efficiency and effectiveness of the QA automation process.</p>
                              </div>
                              <div className="job-desc-box">
                                   <strong className='job-desc-topics'>Benefits and perks:</strong>
                                   <p className='job-desc-topics'>We believe our people are our greatest strength. With perks and benefits, we intend to offer everything our people need to do their best while maintaining a healthy balance between work and personal life.</p>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default ApplyForm
