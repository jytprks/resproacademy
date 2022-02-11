import React from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import Contact from './Contact';
import Training from './Training';


const Home = () => {
  return <div>
    <Nav/>
    <HeroSection/>
    <Training/>
    <Contact/>
  </div>;
};

export default Home;
