import React, { useState, useEffect, useRef } from 'react';
import './Termional.css';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Termional = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [persons, setPersons] = useState([]);
    const slidesRef = useRef([]);
    const dotsRef = useRef([]);

    useEffect(() => {
        const fetchPersons = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/visit/person/');
                setPersons(response.data.slice(0, 2));
            } catch (error) {
                console.error('Error fetching persons:', error);
            }
        };

        fetchPersons();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % persons.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [persons]);

    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });

        dotsRef.current.forEach((dot, index) => {
            dot.className = index === slideIndex ? 'dot active' : 'dot';
        });
    }, [slideIndex]);

    return (
        <div className="slideshow-container">
            {persons.map((person, index) => (
                <div key={index} className={`termional fade ${index === slideIndex ? 'active' : ''}`} ref={(el) => (slidesRef.current[index] = el)}>
                    <img src={person.image} alt={`person${index + 1}`} className='termional-img' />
                    <div className="termional-des">
                        <RiDoubleQuotesR className='quote-icon' />
                        <p className="bio1">{person.bio.slice(0, 150) + '....'}</p>
                        <p className="bio2">{person.blog.slice(0, 250) + '....'}</p>
                        <Link className='termional-name' to={`${person.url}`}>{person.name}</Link>
                        <p className='termional-post'>{person.post}</p>
                    </div>
                </div>
            ))}
            <br />
            <div className='dots-container'>
                {persons.map((_, index) => (
                    <span key={index} className={index === slideIndex ? 'dot active' : 'dot'} ref={(el) => (dotsRef.current[index] = el)}></span>
                ))}
            </div>
        </div>
    );
};

export default Termional;
