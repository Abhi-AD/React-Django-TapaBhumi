import React, { useEffect, useState } from 'react'
import './Contact.css'
import Location from '../../containers/Location/Location'
import contact from '../../assests/img/contact.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState('volvo');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const [services, setServices] = useState([]);
  const [engagementchoices, setEngagementChoices] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const serviceAll = await axios.get('http://127.0.0.1:8000/api/visit/service/');
        const engagementchoicesAll = await axios.get('http://127.0.0.1:8000/api/visit/engagementchoice/');
        const serviceData = serviceAll.data.slice(0, 4);
        const engagementchoicesData = engagementchoicesAll.data.slice(0, 4);
        setServices(serviceData)
        setEngagementChoices(engagementchoicesData)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="contact">
        <div className="contact_header">
          <h1 className="contact_title">contact us</h1>
          <p className="contact_des">Let's build  <span>together</span></p>
          <p className="desc_contact">Whether you're a startup trying to launch a business or an enterprise looking to scale up, there's definitely something we can do for you.</p>
        </div>


        <div className="contact_form">
          <div className="contact_form-left">
            <img src={contact} alt="contact" className='js-scroll fade-in' />
            <div className="vacancy">
              <h2 className='vacancy_title'>Looking for a job?</h2>
              <p className="vacancy_desc">There is always an exciting position open that you can apply right away. Don't worry even if there's not something that suits you imme</p>
              <Link className="apply_now" to={'/job'}>
                <span style={{ paddingRight: '10px' }}>apply now</span>
                <FaArrowRight className='fa' />
              </Link>
            </div>
            <div className="vacancy">
              <h2 className='vacancy_title'>Get an internship</h2>
              <p className="vacancy_desc">Check out our internship page and ways to get in touch if you’re looking to get an internship at Leapfrog.</p>
              <Link className="apply_now" to={'/job'}>
                <span style={{ paddingRight: '10px' }}>become an intern</span>
                <FaArrowRight className='fa' />
              </Link>
            </div>
          </div>
          <div className="contact_form-right">
            <div className="contact_form-right-header">
              <h2 className='contact_form-right-title'>Simply fill out <span>this form</span></h2>
              <p>We will promptly respond to your inquiry to discuss potential collaboration opportunities. You can expect to hear from us within two business days.</p>
            </div>
            <form>
              <div className="form__group">
                <label>Your full name</label>
                <input type="text" placeholder='eg. John Doe' />
                <hr />
                <p></p>
              </div>
              <div className="form__group">
                <label>Your email address</label>
                <input type='text' placeholder='eg.you@example.con' />
                <hr />
                <p>We won't send you spam.</p>
              </div>
              <div className="form__group">
                <label>How do you want to work with us?</label>
                <p>We have more than one ways to engage.</p>
                {engagementchoices.map(engagementchoice => (
                  <button className="button__radio" type="button">
                    <input
                      type="radio"
                      name="relocate"
                      value="augment"
                      className="contact_radio"
                      id={engagementchoice.id}
                    />
                    <label htmlFor={engagementchoice.id}>
                      <img src={engagementchoice.image} alt={engagementchoice.name} className="button__icon" />
                      <div className="button__radio-content">
                        <span>{engagementchoice.name}</span>
                        <p>{engagementchoice.description}</p>
                      </div>
                    </label>
                  </button>
                ))}

              </div>
              <div className="form__group">
                <label>What service do you require?</label>
                <p>Select all services you may need.</p>
                <div className="multiSelectorCheckbox">
                  {services.map(service => (
                    <label className="multiSelectCheckbox__label">
                      <input type='checkbox' />
                      <p className='checkbox'>{service.name}</p>
                    </label>
                  ))}
                </div>

              </div>
              <div className="form__group">
                <label>What is your phone number?</label>
                <div className="number">
                  <select className="country" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                  </select>
                  <input type="text" placeholder='Enter Your number' />
                </div>
              </div>
              <div className="form__group">
                <label>Tell us something about your project</label>
                <div className="textarea">
                  <textarea placeholder='eg. I am looking to develop this incredible app that...' cols="5" rows="5"></textarea></div>
              </div>
              <button className='contact_button'>send a message</button>
            </form>
          </div>
        </div>
      </div>
      <Location />
    </div>
  )
}

export default Contact
