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
        absolute
        w-full max-w-[1000px] h-auto
        left-1/2 transform -translate-x-1/2
        top-[2809px]
        bg-[#1D2022FF]
        rounded-[24px]
        shadow-2xl
        border-2 border-transparent
        transition-all duration-300
        hover:border-[#00ffff]
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
          border-2 border-[#00ffff]
          rounded-3xl p-4 md:p-6 lg:p-8
          transition-all duration-300
          bg-[#0f172a] bg-opacity-90 backdrop-blur
          shadow-inner
        ">
          <Chatbot />
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-3 bg-[#00ffff] rounded-lg px-4 py-2 shadow-lg items-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-[32px] h-[32px]"
            />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src={mailmeLogo}
              alt="Mail Me"
              className="w-[32px] h-[32px]"
            />
          </a>
        </div>
      </div>

      <img
        src={footerVector}
        alt="Footer Vector"
        className="w-full h-auto rounded-b-[24px] overflow-hidden"
      />
    </div>
  );
};

export default Contact;
