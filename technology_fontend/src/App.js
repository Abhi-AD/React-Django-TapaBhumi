import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Footer, ScrollToTopButton } from './components/index'
import { Home, Services, Join, Blog, About, Contact, VisitCard } from './page/imports'
import './App.css'

import { ApplyForm, Casestudy, CasestudyDetails, Current } from './containers/index'
import CardDesign from './page/VisitCard/CardDesign'

const App = () => {
     useEffect(() => {
          const scrollElements = document.querySelectorAll(".js-scroll");
          const elementInView = (el, dividend = 1) => {
               const elementTop = el.getBoundingClientRect().top;
               return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
          };
          const elementOutofView = (el) => {
               const elementTop = el.getBoundingClientRect().top;
               return elementTop > (window.innerHeight || document.documentElement.clientHeight);
          };
          const displayScrollElement = (element) => {
               element.classList.add("scrolled");
          };
          const hideScrollElement = (element) => {
               element.classList.remove("scrolled");
          };
          const handleScrollAnimation = () => {
               scrollElements.forEach((el) => {
                    if (elementInView(el, 1.25)) {
                         displayScrollElement(el);
                    } else if (elementOutofView(el)) {
                         hideScrollElement(el);
                    }
               });
          };

          window.addEventListener("scroll", handleScrollAnimation);
          return () => {
               window.removeEventListener("scroll", handleScrollAnimation);
          };
     }, []);
     return (
          <Router>
               <ScrollToTopButton />
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/join' element={<Join />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/case-study' element={<Casestudy />} />
                    <Route path='/case-study-details' element={<CasestudyDetails />} />
                    <Route path='/visiting-card' element={<VisitCard />} />
                    <Route path='/apply-form' element={<ApplyForm />} />
                    <Route path='/card' element={<CardDesign />} />
                    <Route path='/job' element={<Current />} />
               </Routes>
               <Footer />
          </Router>
     )
}

export default App