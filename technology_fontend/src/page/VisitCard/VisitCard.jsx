import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardDesign from './CardDesign';
import './VisitCard.css';
import { visitCardSchema } from '../../schema/requirement';
import { yupResolver } from "@hookform/resolvers/yup";

const VisitCard = () => {
     const defaultValue = {
          name: '',
          email: '',
          post: '',
          phone: '',
          website: '',
          address_line_1: '',
          address_line_2: '',
          showQR: false,
          qrData: ''
     };
     const [isSubmit, setIsSubmit] = useState(false);
     const [formData, setFormData] = useState(defaultValue);
     const { register, handleSubmit, reset, formState: { errors } } = useForm({
          defaultValues: defaultValue,
          resolver: yupResolver(visitCardSchema)
     });

     const submitData = async (data) => {
          try {
               const response = await axios.post('http://127.0.0.1:8000/api/visit/visit/', data);
               if (response.status === 201) {
                    alert('Form submitted successfully!');
                    setIsSubmit(true);
                    generateQRCode(data);
               } else {
                    alert('Form submission failed!');
               }
          } catch (error) {
               console.error('Error submitting form:', error);
               alert('Form submission failed!');
          }
     };

     const generateQRCode = (data) => {
          const { name,post, email, phone, website, address_line_1, address_line_2 } = data;
          const qrDataString = `Name: ${name}\nPost: ${post}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nAddress1: ${address_line_1}\nAddress2: ${address_line_2}`;
          setFormData({ ...data, showQR: true, qrData: qrDataString });
     };

     return (
          <div className='visit-card'>
               <form className="visit-card-form" onSubmit={handleSubmit(submitData)}>
                    <ul className="visit-card-form-section">
                         <li className="visit-card-form-section-title">
                              <h2>Order Your Business Card</h2>
                              <p>Please fill and verify that information given is correct.</p>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">Name</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="text"
                                        name="name"
                                        placeholder='Full Name'
                                        {...register("name")}
                                   />
                                   {errors.name && <p className='error-message'>{errors.name.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">Post</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="text"
                                        name="Post"
                                        placeholder='Designation Name'
                                        {...register("post")}
                                   />
                                   {errors.name && <p className='error-message'>{errors.post.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">E-mail</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="email"
                                        name="email"
                                        placeholder='ex: myname@example.com'
                                        {...register("email")}
                                   />
                                   {errors.email && <p className='error-message'>{errors.email.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">Phone</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="tel"
                                        name="phone"
                                        placeholder='Your phone number'
                                        {...register("phone")}
                                   />
                                   {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">Website</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="url"
                                        name="website"
                                        placeholder='www.mywebsite.com'
                                        {...register("website")}
                                   />
                                   {errors.website && <p className='error-message'>{errors.website.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-data">
                              <span className="visit-card-field">Address</span>
                              <div className="visit-card-field-input">
                                   <input
                                        type="text"
                                        name="address_line_1"
                                        placeholder='Permanent address'
                                        {...register("address_line_1")}
                                   />
                                   {errors.address_line_1 && <p className='error-message'>{errors.address_line_1.message}</p>}
                                   <input
                                        type="text"
                                        name="address_line_2"
                                        placeholder='Temporary address'
                                        {...register("address_line_2")}
                                   />
                                   {errors.address_line_2 && <p className='error-message'>{errors.address_line_2.message}</p>}
                              </div>
                         </li>
                         <li className="visit-card-forms-section-button">
                              <button type="submit">Submit Form</button>
                              <button type="button" onClick={() => reset(defaultValue)}>Clear Form</button>
                         </li>
                    </ul>
               </form>
               <CardDesign formData={formData} isSubmit={isSubmit} />
          </div>
     );
};

export default VisitCard;
