import React from 'react'
import './ApplyForm.css'
import { Link } from 'react-router-dom'
const ApplyForm = () => {
     return (
          <div className='apply-form'>
               <div className="apply-form-header">
                    <div className="apply-form-title">
                         <Link className='switch-button' to={`/apply-form`}>Job details</Link>
                         <Link className='switch-button' to={`/apply-form`}>Apply</Link>
                    </div>
               </div>



               <div className="apply-form-data">
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

          </div>
     )
}

export default ApplyForm
