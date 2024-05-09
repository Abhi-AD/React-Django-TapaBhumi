import React, { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';

const Location = () => {
     const [locations, setLocations] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/location/');
                    const filterData = responseAll.data.slice(0,3);
                    setLocations(filterData);
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);
     return (
          <div className='location'>
               <h2 className='location_title'>We're happy to <span>chat in person</span> if you're close to one of our <span>office locations.</span></h2>
               <div className="location_grid">
                    {locations.map(location => (
                         <div className="col_location">
                              <img src={location.image} alt="Seattle" />
                              <div className="post-card_location">
                                   <h3>{location.name}</h3>
                                   <p>{location.address} {location.city}, {location.country}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Location;
