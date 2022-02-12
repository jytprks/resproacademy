import React from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import Contact from './Contact';
import  Team  from './Team';
import Training from './Training';


const Home = () => {
  return <div>
    <Nav/>
    <HeroSection/>
    <Training/>
    <Team/>
    <Contact/>
  </div>;
};

export default Home;
