import React from 'react'
import './VisitCard.css'
import CardDesign from './CardDesign'

const VisitCard = () => {
     return (
          <div className='visit-card'>
               <div className="visit-card-form">
                    <div className="error-message">
                         <img src="https://cdn.jotfor.ms/images/exclamation-octagon.png" alt="" />
                         <span>This field is required.</span>
                    </div>
                    <ul className="visit-card-form-section">
                         <li className="visit-card-form-section-title">
                              <h2>Order Your Business Card</h2>
                              <p>Please fill and vefity that information given is correct.</p>
                         </li>
                         <li className="visit-card-forms-section-data" required>
                              <span className="visit-card-field"> Name</span>
                              <div className="visit-card-field-input">
                                   <input type="text" placeholder='Full Name' required />
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data" required>
                              <span className="visit-card-field"> E-mail</span>
                              <div className="visit-card-field-input">
                                   <input type="email" placeholder='ex:myname@example.com' required />
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data" required>
                              <span className="visit-card-field"> Phone</span>
                              <div className="visit-card-field-input">
                                   <input type="email" placeholder='Your phone number' required />
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data" required>
                              <span className="visit-card-field"> Website</span>
                              <div className="visit-card-field-input">
                                   <input type="text" placeholder='www.mywebsite@gmail.com' required />
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data" required>
                              <span className="visit-card-field"> Address</span>
                              <div className="visit-card-field-input">
                                   <input type="text" required />
                                   <input type="text" required />
                              </div>
                         </li>












                         <li className="visit-card-forms-section-button">
                              <button type="submit">Submit Form</button>
                              <button type="submit">Clear Form</button>
                              <button type="submit">QR Generator</button>
                         </li>

                    </ul>
               </div>

               <CardDesign/>


          </div>
     )
}

export default VisitCard
