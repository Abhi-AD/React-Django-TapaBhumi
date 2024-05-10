import React, { useEffect, useState } from 'react'
import './CTA.css'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

const CTA = () => {
     const [books, setBooks] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/book/');
                    // setBooks(responseAll.data);
                    const filterData = responseAll.data.slice(0, 3);
                    setBooks(filterData);
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);

     return (
          <div className='section-panel cta_padding'>
               <div className="container CTA1">
                    <div className="section-title">
                         <h2>See what <span className='section_title_base'>we are thinking</span></h2>
                         <p className='fs-lead'>We're not just doers, we're tinkerers and thinkers obsessed with building new things in better ways. Read some of
                              our insights,
                              download our playbooks
                         </p>
                    </div>
                    <div className="col_blog row js-scroll fade-in">
                         {books.map(books => (
                              <div className="col">
                                   <img src={books.image} alt={books.title} />
                                   <p className='desc'>{books.des1}</p>
                                   <span className='button'>
                                        <FaFilePdf className='fa' /><p className='icon_text'>Get the book</p><FaArrowRight className='fa' />
                                   </span>
                              </div>
                         ))}

                    </div>
               </div>
          </div>
     )
}

export default CTA
