'use client'
import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/Auth/LoginForm';
import CustomBanner from './components/CustomBanner';
import Footer from './components/Footer';
import Testimonials from './components/Testiminials';
import ContactForm from './components/ContactForm';
import ServicesSection from './components/ServiceSection';
import StatisticsSection from './components/StatisticSection';
import { image1, image2, image3 } from '@/assets/images';

export default function Home() {

  const bannerImages = [
    image1, image2, image3
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Navbar />
          <CustomBanner images={bannerImages}/>
          <ServicesSection/>
          <Testimonials/>
          <StatisticsSection/>
          <ContactForm/>
          <Footer />
        </div>
    </main>
  );
}
