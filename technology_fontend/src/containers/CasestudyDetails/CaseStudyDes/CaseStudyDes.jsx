import React from 'react'
import './CaseStudyDes.css'
import { Link } from 'react-router-dom'
const CaseStudyDes = () => {
     return (
          <div>
               <div className='case-study-des'>
                    <h3 className='case-study-des-title'>The mission was bigger than building “just” a software</h3>
                    <p className="case-study-des-desc">In the summer of 2020, Leapfrog's healthcare initiative, Signetic, spearheaded a groundbreaking transformation of Seattle's vaccination program, replacing paper processes with an efficient, all-digital system. Employing agile development, automated testing, and user-centric design, our expert team swiftly crafted a robust solution.</p>
                    <p className="case-study-des-desc1">Our founder, Chandika Bhandari, foresaw the potential for scalability and the significant impact on national COVID vaccination efforts. He shares, "I aimed for my son to reclaim the park. The system's scalability was evident, a simple conclusion</p>
                    <p className="case-study-des-desc1">As 2021 dawned, Signetic stood alongside tech giants Microsoft and Salesforce to vie for the City of Seattle's COVID vaccination software contract. The city's preference for Signetic's intuitive user experience was clear. Notably, we worked diligently to tailor the solution to accommodate mass vaccination sites, particularly at Seattle's renowned Lumen Field. Our partnership enabled the city to achieve an impressive daily vaccination rate of 100,000.</p>
                    <p className="case-study-des-desc1">Seattle's Lumen Field emerged as the United States' largest civilian-run vaccination site in March 2021. Our relentless dedication and meticulous customization, addressing aspects like bookings, dose accounting, and nurse-related features, ensured a comprehensive solution.</p>
                    <p className="case-study-des-desc1">Signetic not only transformed vaccination processes but also led Seattle's pioneering strides in the fight against COVID.</p>
               </div>

               <div className="case-study-card">
                    <div className="case-study-card-col">
                         <img src="https://img.freepik.com/free-vector/office-work-man-sitting-table-working-laptop-data-processing-bank-employee_39422-748.jpg?t=st=1713787928~exp=1713791528~hmac=e8ee155ab91b4f65f9fdc93a3b7840f060ca614a6ba847d43369b5c686590a5d&w=826" alt="card1" className='case-study-card-col-img' />
                         <div className="case-study-card-info">
                              <h3 className='case-study-card-info-title'>Manager Portal</h3>
                              <p className="case-study-card-info-desc">Managers can set up schedules for immunization, vaccine code setup, organize content as well as manage IIS and state reporting.</p>
                         </div>
                    </div>
                    <div className="case-study-card-col">
                         <img src="https://img.freepik.com/free-vector/office-work-man-sitting-table-working-laptop-data-processing-bank-employee_39422-748.jpg?t=st=1713787928~exp=1713791528~hmac=e8ee155ab91b4f65f9fdc93a3b7840f060ca614a6ba847d43369b5c686590a5d&w=826" alt="card1" className='case-study-card-col-img' />
                         <div className="case-study-card-info">
                              <h3 className='case-study-card-info-title'>Manager Portal</h3>
                              <p className="case-study-card-info-desc">Managers can set up schedules for immunization, vaccine code setup, organize content as well as manage IIS and state reporting.</p>
                         </div>
                    </div>
                    <div className="case-study-card-col">
                         <img src="https://img.freepik.com/free-vector/office-work-man-sitting-table-working-laptop-data-processing-bank-employee_39422-748.jpg?t=st=1713787928~exp=1713791528~hmac=e8ee155ab91b4f65f9fdc93a3b7840f060ca614a6ba847d43369b5c686590a5d&w=826" alt="card1" className='case-study-card-col-img' />
                         <div className="case-study-card-info">
                              <h3 className='case-study-card-info-title'>Manager Portal</h3>
                              <p className="case-study-card-info-desc">Managers can set up schedules for immunization, vaccine code setup, organize content as well as manage IIS and state reporting.</p>
                         </div>
                    </div>
                    <div className="case-study-card-col">
                         <img src="https://img.freepik.com/free-vector/office-work-man-sitting-table-working-laptop-data-processing-bank-employee_39422-748.jpg?t=st=1713787928~exp=1713791528~hmac=e8ee155ab91b4f65f9fdc93a3b7840f060ca614a6ba847d43369b5c686590a5d&w=826" alt="card1" className='case-study-card-col-img' />
                         <div className="case-study-card-info">
                              <h3 className='case-study-card-info-title'>Manager Portal</h3>
                              <p className="case-study-card-info-desc">Managers can set up schedules for immunization, vaccine code setup, organize content as well as manage IIS and state reporting.</p>
                         </div>
                    </div>
               </div>




               <div className="case-study-footer">
                    <div className="case-study-footer-row">
                         <div className="case-study-footer-col">
                              <img src="https://img.freepik.com/free-photo/business-people-dining-restaurant_53876-46892.jpg?t=st=1713786800~exp=1713790400~hmac=ff2ba9bf502004293640552d1c649ceee92a139ccb0064a85b7b508cef22a348&w=900" alt="" />
                         </div>
                         <div className="case-study-footer-col">
                              <h2>About Signetic</h2>
                              <p className='case-study-footer-col-des1'>Signetic's platform has now vaccinated over 1,000,000 people. And we haven't stopped there.</p>
                              <p className='case-study-footer-col-des1'>Purpose-built for vaccinations, MVS offers user-friendly experiences with its patient, clinician/volunteer, and admin portals. Patients receive text and/or email appointment confirmations and reminders, and MVS features optional insurance billing presets and integrated reporting to the Washington State Immunization Information System (IIS).</p>
                              <Link className='learMore'>Learn More....</Link>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default CaseStudyDes
