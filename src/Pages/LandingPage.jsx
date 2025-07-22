import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header, Navbar, Skills, Projects, Contact } from '../Components';
import CursorGlow from '../Components/CursorGlow/CursorGlow';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true }); // Customize as needed

    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
  }, []);

  return (
    <>
      <CursorGlow />
      <div className="app-container max-w-[1400px] mx-auto transition-all duration-300 shadow-[0_0_0_1px_#1e293b] hover:shadow-[0_0_20px_4px_#00ffff]">
        <Navbar /> 
        <Header />
        <div data-aos="fade-up" data-aos-delay="100"><Skills /></div>
        <div data-aos="fade-up" data-aos-delay="200"><Projects /></div>
        <div data-aos="fade-up" data-aos-delay="300"><Contact /></div>
      </div>
    </>
  );
};

export default LandingPage;
