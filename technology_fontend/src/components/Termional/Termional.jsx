import React, { useState, useEffect } from 'react';
import './Termional.css'; // Import your CSS file
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Termional = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            showSlides();
        }, 1500);

        return () => clearInterval(interval);
    }, [slideIndex]);

    const showSlides = () => {
        const slides = document.getElementsByClassName("termional");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex > slides.length - 1) {
                newIndex = 0;
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[newIndex].style.display = "block";
            dots[newIndex].className += " active";

            return newIndex;
        });
    };
    const [persons, setPeoples] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/person/');
                setPeoples(responseAll.data.slice(0, 2))
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="slideshow-container">
            {persons.map((person, index) => (
                <div key={index} className={`termional fade ${index === slideIndex ? 'active' : ''}`}>
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
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default Termional;
