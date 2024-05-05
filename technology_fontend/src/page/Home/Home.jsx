import React from 'react'
import { Brand, Connect, Termional } from '../../components/index'
import { Casestudy, Header, Item, Parnter } from '../../containers/index'
import CTA from '../../components/CTA/CTA'

const Home = () => {
     return (
          <div className='App'>
               <Header />
               <Brand />
               <Termional />
               <Item />
               <Casestudy />
               <Parnter />
               <CTA />
               <Connect />
          </div>
     )
}

export default Home
