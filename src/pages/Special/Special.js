import Layout from '@/Layout/layout'
import React, { useEffect, useMemo, useState } from 'react'
import Pack from '../Pack/Pack'


const Special = () => {

  return (
    <>
         <Pack itemsPerPage={4}/>
    </>
  )
}

Special.getLayout = function getLayout(page) {
    return (
  
        <Layout>{page}</Layout>
    )
  }

export default Special