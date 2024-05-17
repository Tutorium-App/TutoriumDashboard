import React from 'react'
import { ManageServicesTemplateDetail } from '../../components'
import ServicesData from './ServicesDB'

const ServicesDetail = () => {
  return (
    <>
        <ManageServicesTemplateDetail Data={ServicesData} />
    </>
  )
}

export default ServicesDetail