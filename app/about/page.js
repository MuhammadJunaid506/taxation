import React from 'react'
import Navbar from '../components/Navbar'
import CustomBanner from '../components/CustomBanner'
import Footer from '../components/Footer'

const About = () => {
  const bannerImages = [
    image1, image2, image3
  ];
  return (
    <div>
        <Navbar />
        <CustomBanner images={bannerImages}/>
        <Footer />
    </div>
  )
}

export default About
