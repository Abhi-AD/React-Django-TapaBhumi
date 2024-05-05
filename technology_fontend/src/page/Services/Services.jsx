import React from 'react'
import { ServiceAbout, ServiceFooter, ServiceHeader, ServiceInnovation, ServiceWork } from '../../containers/index'

const Services = () => {
  return (
    <div>
      <ServiceHeader />
      <ServiceInnovation />
      <ServiceWork />
      <ServiceAbout />
      <ServiceFooter />
    </div>
  )
}

export default Services
