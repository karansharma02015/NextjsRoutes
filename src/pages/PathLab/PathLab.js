'use client'
import React from 'react'
import HomeSlider from '../PathLab/HomeSlider'
import Prescription from '../PathLab/Prescription'
import Special from '../PathLab/Special'
import Layout from '@/Layout/layout'
import PopularTest from './PopularTest'
import Test from './Test'
import Promotion from './Promotion'
import Faq from './Faq'

const PathLab = () => {
  return (
    <>
        <HomeSlider/>
        
        <Prescription/>
        <Special/>

        <PopularTest/>
        <Test/>
        <Promotion/>
        <Faq/>
    </>
  )
}

PathLab.getLayout = function getLayout(page) {
    return (
  
        <Layout>{page}</Layout>
    )
  }
export default PathLab