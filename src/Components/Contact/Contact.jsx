import React from 'react';
import Chatbot from '../Chatbot/Chatbot'; // ✅ adjust if needed
import lineVector from '../../assets/linevector.svg';
import footerVector from '../../assets/footervector.svg';
import linkedinLogo from '../../assets/linkedinlogo.svg';
import mailmeLogo from '../../assets/mailmelogo.svg';

const Contact = () => {
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
      <div className="
        flex flex-col justify-center items-center
        p-0 gap-1 w-full pt-6
      ">
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
        <img
          src={lineVector}
          alt="Line Vector"
          className="w-[100px] h-[4px]"
        />
      </div>

      {/* ✅ Bordered Chatbot Container */}
      <div className="
        flex justify-center items-center
        w-full px-4 py-8
      ">
        <div className="
          w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px]
       
          rounded-3xl p-4 md:p-6 lg:p-8
          transition-all duration-300
          bg-[#0f172a] bg-opacity-90 backdrop-blur
          shadow-inner
        ">
          <Chatbot />
        </div>
      </div>

          {/* Footer Section */}
      <div className="flex flex-col items-center mb-8 px-4 gap-4">
        {/* Better Styled Icon Buttons */}
        <div className="flex gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 shadow-lg"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-[28px] h-[28px]"
            />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 shadow-lg"
          >
            <img
              src={mailmeLogo}
              alt="Mail Me"
              className="w-[28px] h-[28px]"
            />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-3/4 h-px bg-cyan-400/30" />

        {/* Your Name */}
        <p className="text-cyan-300 text-sm tracking-wide font-light italic">
          Haroon Nasim — 2025
        </p>
      </div>

      {/* Neon Glowing Footer SVG */}
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

      </div>
  );
};

export default Contact;
