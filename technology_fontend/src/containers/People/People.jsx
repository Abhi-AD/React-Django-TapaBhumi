import React from 'react'
import './People.css'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaLinkedin } from "react-icons/fa";


const People = () => {
     return (
          <div className="people about_padding">
               <div className="people_title">
                    <span>Meet The Dream Team</span>
                    <h2><span>World-class people, </span> making a dent in the universe</h2>
               </div>
               <div className="team ">
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1713431319~exp=1713434919~hmac=3bcf09df3d7ac10db4ebcf9fe8aefaa60cef279803d923a3f638d7ca3a3cfb9b&w=900" alt='people1' />
                         <div className="team__infos">
                              <h3>Alex John </h3>
                              <span>CEO </span>
                              <p>Alex oversees the culture, delivery, and healthcare divisions at Horizon Solutions. They bring to the table extensive experience of 7 years, ranging from spearheading enterprise innovation teams at a tech giant to serving as CEO and co-founder of a thriving venture-backed startup. They earned their degrees from Columbia University in 2017, majoring in Cognitive Science and Computer Engineering, with a specialization in Human-Computer Interaction.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-wearing-casual-tshirt-waving-hands-isolated-pink-background_1150-63284.jpg?t=st=1713432540~exp=1713436140~hmac=b41f2d2273f5397b5fd8a7a684ee4f4d6bb28d5bbb18ff1de004ff9a805d96e3&w=900" alt='people2' />
                         <div className="team__infos">
                              <h3>Sarita Patel</h3>
                              <span>President</span>
                              <p>Sarita founded technology in 2010 and leads global growth and operations. An engineer by training, Himal has over 25 years of experience spanning enterprise, healthcare, and data. Himal is an accomplished business leader and speaker. Himal has previously served in leadership roles at Verisk Health, Oracle, and Motorola. He did his bachelor’s and master's in EECS at MIT.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1713432915~exp=1713436515~hmac=e504d516d324c4d5488484986bfc5b3f33ea3bca1be374b34154a484984eac33&w=826" alt='people3' />
                         <div className="team__infos">
                              <h3>Raj Patel</h3>
                              <span>President</span>
                              <p>Raj leads strategy, growth, and technology's Signetic product. Raj has been a vanguard of the decentralization of healthcare, leading initiatives to support public health with customers such as the City of Seattle. A 10-year Microsoft veteran, Raj led his own startups and service companies prior to joining technology. He completed his bachelor's in computer science from BYU.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1713433107~exp=1713436707~hmac=ee272f3d67c9faca6410da9eb79c2fd6cf8a05075a96167d55d9a558790a4ff8&w=900" alt='people4' />
                         <div className="team__infos">
                              <h3>Kalpana Jha</h3>
                              <span>SVP, Global Operations</span>
                              <p>Kalpana heads our over 400 person organization in Nepal. A top engineering talent in Nepal, he served as Leapfrog's CTO, implementing world-class engineering practices. Since moving into operations, Kalpana has been instrumental in improving processes and capabilities within as well as beyond Nepal. He leverages his background to foster world-class engineers and leaders in Nepal.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/closeup-portrait-woman-smiling-with-perfect-smile-white-teeth_273609-13701.jpg?t=st=1713433295~exp=1713436895~hmac=a5540d272b6e81605ac91e49f5a23fd28889d299109043a458f6f1dcf8db4e51&w=900" alt='people5' />
                         <div className="team__infos">
                              <h3>Aarati Khadka</h3>
                              <span>Director, Data Solutions</span>
                              <p>Aarati, a 20-year data engineering veteran, drives BI transformations across Fortune 500 to startups, simplifying data strategies for impactful outcomes. She leads Signetic's data team to prove out its value in impacting communities and pharmacies. Aarati is a master of all things data, BI, and automation, and has an uncanny talent to translate business requirements into data solutions.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
                    <div className="people_card js-scroll fade-in">
                         <img src="https://img.freepik.com/free-photo/portrait-happy-bearded-young-man-glasses-standing-outdoors_171337-14763.jpg?t=st=1713433946~exp=1713437546~hmac=07e74348b4dd587aeb0085822fade6fa79838714aa9af43f706fce03bdea9234&w=900" alt='people6' />
                         <div className="team__infos">
                              <h3>Pamela Kott</h3>
                              <span>Vice President</span>
                              <p>Pam directs Leapfrog's EdTech programs and Signetic, Leapfrog's health-tech venture. She excels in delivering Health tech solutions via Signetic and collaborative EdTech products, including Agilix, ACT, The College Board, NSF, Michael and Susan Dell Foundation, and the Bill and Melinda Gates Foundation. Pam graduated from Virginia Tech with a degree in Mechanical Engineering.</p>
                              <Link className='profile-link'>
                                   <FaLinkedin />
                                   <span>Linkedin</span>
                                   <FaArrowRight />
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default People
