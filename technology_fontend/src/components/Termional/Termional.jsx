import React, { useState, useEffect } from 'react';
import './Termional.css'; // Import your CSS file
import { person1, person2 } from './import';
import { RiDoubleQuotesR } from 'react-icons/ri';


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

    return (
        <div className="slideshow-container">
            <div className="termional fade">
                <img src={person1} alt="person1" className='termional-img js-scroll fade-in' />
                <div className="termional-des">
                    <RiDoubleQuotesR className='quote-icon' />
                    <p className="bio1">Become an advocate for biotechnology and help shape policy that promotes innovation! Contact policymakers directly through BIO’s easy-to-use tool and have your voice heard.</p>
                    <p className="bio2">Over 40K subscribers worldwide can’t be wrong. Good Day BIO is the top resource for biotech industry news—and the only daily newsletter at the intersection of biotech, politics, and policy. (And, it’s free!) </p>
                    <h1 className='termional-name'>Shane Warne</h1>
                    <p className='termional-post'>Co-founder</p>
                </div>
            </div>
            <div className="termional fade">
                <img src={person2} alt="person2" className='termional-img js-scroll fade-in' />
                <div className="termional-des">
                    <RiDoubleQuotesR className='quote-icon' />
                    <p className="bio1">Become an advocate for biotechnology and help shape policy that promotes innovation! Contact policymakers directly through BIO’s easy-to-use tool and have your voice heard.</p>
                    <p className="bio2">Over 40K subscribers worldwide can’t be wrong. Good Day BIO is the top resource for biotech industry news—and the only daily newsletter at the intersection of biotech, politics, and policy. (And, it’s free!) </p>
                    <h1 className='termional-name'>Shane Warne</h1>
                    <p className='termional-post'>Co-founder</p>
                </div>
            </div>
            <br />
            <div className='dots-container'>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default Termional;
