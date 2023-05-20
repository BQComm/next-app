import React from 'react'
import NavBar from './components/navbar'
import HeroSection from './components/herosection'
import PortfolioSection from './components/portfoliosection'
import FooterSection from './components/footersection'
import GoUpBtn from './components/goupbtn'
import AboutMeSection from './components/aboutmesection'
import ContactMeSection from './components/contactmesection'


export default function Home() {
  return (
  <div className=''>
    <NavBar />
    <HeroSection />
    <AboutMeSection />
    <PortfolioSection />
    <ContactMeSection />
    <FooterSection />
    <GoUpBtn />
  </div>
  )
}
