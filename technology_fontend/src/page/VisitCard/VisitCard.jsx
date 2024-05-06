import React from 'react';
import QRCode from 'qrcode.react';
import './VisitCard.css';
import CardDesign from './CardDesign';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

class VisitCard extends React.Component {
     constructor() {
          super();
          this.state = {
               name: '',
               email: '',
               phone: '',
               website: '',
               address_line_1: '',
               address_line_2: '',
               errorMessage: '',
               showQR: false,
               qrData: ''
          };
     }

     clearForm = () => {
          this.setState({
               name: '',
               email: '',
               phone: '',
               website: '',
               address_line_1: '',
               address_line_2: '',
               errorMessage: '',
               showQR: false,
               qrData: ''
          });
     };

     changeHandler = (event) => {
          const { name, value } = event.target;

          if (name === 'phone') {
               const phoneNumber = value.replace(/\D/g, '');
               if (phoneNumber.length <= 10) {
                    this.setState({
                         [name]: phoneNumber
                    });
               }
          } else {
               this.setState({
                    [name]: value,
                    errorMessage: ''
               });
          }
     };

     submitData = async () => {
          const { name, email, phone, website, address_line_1, address_line_2 } = this.state;

          if (!name || !email || !phone || !website || !address_line_1 || !address_line_2) {
               this.setState({ errorMessage: 'All fields are required.' });
               return;
          }

          try {
               const response = await fetch('http://127.0.0.1:8000/api/visit/visit/', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(this.state)
               });

               if (response.ok) {
                    // this.clearForm();
                    alert('Form submitted successfully!');
               } else {
                    alert('Form submission failed!');
               }
          } catch (error) {
               console.error('Error submitting form:', error);
               alert('An error occurred while submitting the form.');
          }
     };

     generateQRCode = () => {
          const { name, email, phone, website, address_line_1, address_line_2 } = this.state;
          if (name.trim() !== '' || email.trim() !== '' || phone.trim() !== '' || website.trim() !== '' || address_line_1.trim() !== '' || address_line_2.trim() !== '') {
               const qrDataString = `Name:${name.trim()}\nEmail:${email.trim()}\nPhone:${phone.trim()}\nWebsite:${website.trim()}\nAddress1:${address_line_1.trim()}\nAddress2:${address_line_2.trim()}`;
               this.setState({
                    showQR: true,
                    qrData: qrDataString
               });
          }
     };

     render() {
          return (
               <div className='visit-card'>
                    <div className="visit-card-form">
                         <ul className="visit-card-form-section">
                              <li className="visit-card-form-section-title">
                                   <h2>Order Your Business Card</h2>
                                   <p>Please fill and verify that information given is correct.</p>
                                   {this.state.errorMessage && (
                                        <div className="error-message">
                                             <img src="https://cdn.jotfor.ms/images/exclamation-octagon.png" alt="" />
                                             <span>{this.state.errorMessage}</span>
                                        </div>
                                   )}
                              </li>
                              <li className="visit-card-forms-section-data">
                                   <span className="visit-card-field">Name</span>
                                   <div className="visit-card-field-input">
                                        <input
                                             type="text"
                                             name="name"
                                             placeholder='Full Name'
                                             value={this.state.name}
                                             onChange={this.changeHandler}
                                             required
                                        />
                                   </div>
                              </li>
                              <li className="visit-card-forms-section-data">
                                   <span className="visit-card-field">E-mail</span>
                                   <div className="visit-card-field-input">
                                        <div className="visit-card-field-input-check">
                                        <input
                                             type="email"
                                             name="email"
                                             placeholder='ex: myname@example.com'
                                             value={this.state.email}
                                             onChange={this.changeHandler}
                                             required
                                        />
                                        </div>
                                   </div>
                              </li>
                              <li className="visit-card-forms-section-data">
                                   <span className="visit-card-field">Phone</span>
                                   <div className="visit-card-field-input">
                                        <div className="visit-card-field-input-check">
                                             <input
                                                  type="tel"
                                                  name="phone"
                                                  placeholder='Your phone number'
                                                  value={this.state.phone}
                                                  onChange={this.changeHandler}
                                                  maxLength={10}
                                                  required
                                             />
                                             {this.state.phone.length === 10 ? <FaCheckCircle color='green' fontSize={22} /> : <FaTimesCircle color='red' fontSize={22} />}


                                        </div>
                                   </div>
                              </li>
                              <li className="visit-card-forms-section-data">
                                   <span className="visit-card-field">Website</span>
                                   <div className="visit-card-field-input">
                                        <div className="visit-card-field-input-check">

                                             <input
                                                  type="url"
                                                  name="website"
                                                  placeholder='www.mywebsite.com'
                                                  value={this.state.website}
                                                  onChange={this.changeHandler}
                                                  required
                                             />
                                        </div>
                                   </div>
                              </li>
                              <li className="visit-card-forms-section-data">
                                   <span className="visit-card-field">Address</span>
                                   <div className="visit-card-field-input">
                                        <input
                                             type="text"
                                             name="address_line_1"
                                             placeholder='Address Line 1'
                                             value={this.state.address_line_1}
                                             onChange={this.changeHandler}
                                             required
                                        />
                                        <input
                                             type="text"
                                             name="address_line_2"
                                             placeholder='Address Line 2'
                                             value={this.state.address_line_2}
                                             onChange={this.changeHandler}
                                             required
                                        />
                                   </div>
                              </li>
                              <li className="visit-card-forms-section-button">
                                   <button type="button" onClick={this.submitData}>Submit Form</button>
                                   <button type="button" onClick={this.clearForm}>Clear Form</button>
                                   <button type="button" onClick={this.generateQRCode}>Generate QR Code</button>
                              </li>
                         </ul>
                         {this.state.showQR && (
                              <div className="qr-code">
                                   <QRCode value={this.state.qrData} />
                              </div>
                         )}
                    </div>
                    <CardDesign />
               </div >
          );
     }
}

export default VisitCard;