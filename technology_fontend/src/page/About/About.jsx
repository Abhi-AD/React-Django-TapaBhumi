import React from 'react'
import './About.css'
import { BOx, Hero, Mission, Panel, People, World } from '../../containers/index'
import { Connect } from '../../components/index'

const About = () => {
     return (
          <div>
               <div className='panel'>
                    <Hero />
                    <Mission />
                    <Panel />
                    <People />
                    <World />
               </div>
               <BOx />
               <Connect />
          </div>

     )
}

export default About
