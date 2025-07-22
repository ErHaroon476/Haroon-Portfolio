import React, { useState } from 'react';
import Chatbot from '../Chatbot/Chatbot';
import lineVector from '../../assets/linevector.svg';
import footerVector from '../../assets/footervector.svg';
import linkedinLogo from '../../assets/linkedinlogo.svg';
import contactIcon from '../../assets/contact.svg';

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [glow, setGlow] = useState(false);

  const handleIconClick = () => {
    setSpinning(true);
    setGlow(true);
    setTimeout(() => setSpinning(false), 1000);
    setTimeout(() => setGlow(false), 2000);
    setShowContactInfo(prev => !prev);
  };

  return (
    <div
      id="contact"
      className="
        scroll-mt-[76px]
        w-full max-w-[1000px] h-auto
        mx-auto
        bg-[#1D2022FF]
        rounded-[24px]
        shadow-2xl    
        border-2 border-transparent
        transition-all duration-300
        hover:shadow-[0_0_40px_#00ffff30]
      "
    >
      {/* Title */}
      <div className="flex flex-col justify-center items-center p-0 gap-1 w-full pt-6">
        <h2 className="
          text-[48px] leading-[72px]
          font-['Playfair_Display'] font-bold
          text-center
          bg-gradient-to-r from-[#8f00ff] via-[#EE82EE] to-[#00FFFF]
          bg-[200%_auto]
          text-transparent bg-clip-text
          animate-gradient-x
        ">
          Contact
        </h2>
        <img src={lineVector} alt="Line Vector" className="w-[100px] h-[4px]" />
      </div>

      {/* Chatbot Section */}
      <div className="flex justify-center items-center w-full px-4 py-8">
        <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] rounded-3xl p-4 md:p-6 lg:p-8 transition-all duration-300 bg-[#0f172a] bg-opacity-90 backdrop-blur shadow-inner">
          <Chatbot />
        </div>
      </div>

      {/* Contact Icon & Animated Info */}
      <div className="flex flex-col items-center mb-8 px-4 gap-4">
        <div
          onClick={handleIconClick}
          className={`cursor-pointer w-[60px] h-[60px] rounded-full border border-cyan-400 p-2 flex items-center justify-center transition-transform duration-500 
           
            ${glow ? 'glow-once' : ''}
          `}
        >
          <img src={contactIcon} alt="Contact Icon" className="w-full h-full" />
        </div>

        {/* Roll-out contact info */}
        <div
          className={`
            overflow-hidden transition-all duration-700 ease-in-out
            transform origin-top 
            ${showContactInfo ? 'max-h-[200px] scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'}
          `}
        >
          <div className="flex flex-col items-center gap-2 mt-4 text-cyan-300 text-sm">
            <a
              href="https://mail.google.com/mail/?view=cm&to=haroonsh9876@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Mail Me
            </a>

            <a
              href="https://linkedin.com/in/haroon-nasim/6a8432375/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <span>+923467565857</span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-3/4 h-px bg-cyan-400/30 mt-4" />

        {/* Your Name */}
        <p className="text-cyan-300 text-sm tracking-wide font-light">
          Haroon Nasim — 2025
        </p>
      </div>

      {/* Glowing Footer SVG */}
      <img
        src={footerVector}
        alt="Footer Vector"
        className="
          w-full h-auto
          rounded-b-[24px] overflow-hidden
          filter drop-shadow-[0_0_12px_#00ffff]
          animate-[pulse_2s_ease-in-out_infinite]
        "
      />

      {/* Tailwind Custom Styles */}
      <style jsx>{`
        @keyframes spin-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-smooth {
          animation: spin-smooth 1s ease-in-out;
        }

        @keyframes glowFade {
          0% {
            box-shadow: 0 0 12px #00ffff;
          }
          100% {
            box-shadow: 0 0 0 #00ffff00;
          }
        }

        .glow-once {
          animation: glowFade 2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;
