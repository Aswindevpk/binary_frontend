import React from 'react'
import { SideStaffPicks,SideFollow,SideTopics } from '@components';
import { Footer } from '@components/layouts';

const HomeSide = () => {
  return (
    <>
        <SideStaffPicks/>
        <SideTopics/>
        <SideFollow/>
        <Footer/> 
    </>
  )
}

export default HomeSide;