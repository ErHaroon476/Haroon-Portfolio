import React from 'react';
import Chatbot from '../Chatbot/Chatbot';
import lineVector from '../../assets/linevector.svg';
import footerVector from '../../assets/footervector.svg';

const Contact = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-[76px] w-full max-w-[1000px] h-auto mx-auto bg-[#1D2022FF] rounded-[24px] shadow-2xl border-2 border-transparent transition-all duration-300 hover:shadow-[0_0_40px_#00ffff30]"
    >
      {/* Title */}
      <div className="flex flex-col justify-center items-center p-0 gap-1 w-full pt-6">
        <h2 className="text-[48px] leading-[72px] font-['Playfair_Display'] font-bold text-center bg-gradient-to-r from-[#8f00ff] via-[#EE82EE] to-[#00FFFF] bg-[200%_auto] text-transparent bg-clip-text animate-gradient-x">
          Contact
        </h2>
        <img src={lineVector} alt="Line Vector" className="w-[100px] h-[4px]" />
      </div>

      {/* Chatbot */}
      <div className="flex justify-center items-center w-full px-4 py-8">
        <div className="w-full max-w-[700px] rounded-3xl p-6 transition-all duration-300 bg-[#0f172a] bg-opacity-90 backdrop-blur shadow-inner">
          <Chatbot />
        </div>
      </div>

      {/* Divider */}
      <div className="w-3/4 h-px bg-gray-400/30 mx-auto mb-6" />

      {/* Footer */}
      <div className="flex flex-col items-center gap-4 mb-6 px-4">
        <p className="text-white opacity-60 text-sm tracking-wide font-light">
          2025 &copy; Haroon Nasim
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/haroon-nasim-6a8432375"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-500/40 p-2 rounded-md transition-all duration-300 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
           className="w-5 h-5 fill-white opacity-60 transition-all duration-300 
           group-hover:fill-[#00FFFF] group-hover:opacity-100 
           active:fill-[#00FFFF] active:opacity-100"  viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.267c-.828 0-1.5-.684-1.5-1.532s.672-1.533 1.5-1.533c.829 0 1.5.685 1.5 1.533s-.671 1.532-1.5 1.532zm13 10.267h-2.5v-4.5c0-1.07-.93-1.5-1.5-1.5s-1.5.43-1.5 1.5v4.5h-2.5v-9h2.5v1.035c.661-.806 1.579-1.035 2.5-1.035 2.021 0 3.5 1.519 3.5 4v5z"/>
            </svg>
          </a>

          {/* Mail */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=haroonsh9876@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-500/40 p-2 rounded-md transition-all duration-300 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-white opacity-60 transition-all duration-300 
           group-hover:fill-[#00FFFF] group-hover:opacity-100 
           active:fill-[#00FFFF] active:opacity-100"  viewBox="0 0 24 24"
            >
              <path d="M12 13.5 0 6.75V18c0 1.104.896 2 2 2h20c1.105 0 2-.896 2-2V6.75L12 13.5zm10-9H2c-1.104 0-2 .896-2 2v.484L12 12.75l12-5.766V6.5c0-1.104-.895-2-2-2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Glowing Footer SVG */}
      <img
        src={footerVector}
        alt="Footer Vector"
        className="w-full h-auto rounded-b-[24px] overflow-hidden filter drop-shadow-[0_0_12px_#00ffff] animate-[pulse_2s_ease-in-out_infinite]"
      />
    </div>
  );
};

export default Contact;
