import React, { useEffect, useState } from 'react'
import './People.css'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import axios from 'axios';


const People = () => {
     const [peoples, setPeoples] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/person/');
                    setPeoples(responseAll.data)
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);
     return (
          <div className="people about_padding">
               <div className="people_title">
                    <span>Meet The Dream Team</span>
                    <h2><span>World-class people, </span> making a dent in the universe</h2>
               </div>
               <div className="team ">
                    {peoples.map(people => (
                         <div className="people_card" >
                              <img src={people.image}alt={people.name} />
                              <div className="team__infos">
                                   <h3>{people.name} </h3>
                                   <span>{people.post} </span>
                                   <p>{people.blog.substring(0, 200)+'....'}</p>
                                   <Link className='profile-link' to={`${people.url }`}>
                                        <FaLinkedin />
                                        <span>Linkedin</span>
                                        <FaArrowRight />
                                   </Link>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default People
