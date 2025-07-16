import React, { useEffect } from 'react';
import { Header, Navbar, Projects, Contact } from './Components';
import CursorGlow from './Components/CursorGlow/CursorGlow'; // adjust path

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
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
