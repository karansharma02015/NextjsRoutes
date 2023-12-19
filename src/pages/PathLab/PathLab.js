'use client'
import React from 'react'
import HomeSlider from '../PathLab/HomeSlider'
import Prescription from '../PathLab/Prescription'
import Special from '../PathLab/Special'
import Layout from '@/Layout/layout'

const PathLab = () => {
  return (
    <>
        <HomeSlider/>
        <Prescription/>
        <Special/>
    </>
  )
}

PathLab.getLayout = function getLayout(page) {
    return (
  
        <Layout>{page}</Layout>
    )
  }
export default PathLab