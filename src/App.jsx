import React, { useEffect } from 'react';
import { Header, Navbar, Projects, Contact } from './Components';
import CursorGlow from './Components/CursorGlow/CursorGlow';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
  }, []);

  return (
    <>
      <CursorGlow />

      {/* This is the main container with border */}
    <div className="app-container max-w-[1400px] mx-auto  transition-all duration-300 shadow-[0_0_0_1px_#1e293b] hover:shadow-[0_0_20px_4px_#00ffff]">

        <Navbar />
        <Header />
        <Projects />
        <Contact /> {/* This must be inside here */}
      </div>
    </>
  );
};

export default App;
