import React, { useState, useEffect } from 'react';
import MyPf from '../../assets/mypf.png';

const Header = () => {
  const titles = [
    "Full Stack",
    "AI Engineer",
    "Computer Engineer",
    "Ui/UX / Backend Dev"
  ];

  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let typingSpeed = 70;
    let deletingSpeed = 40;
    let delayAfterFull = 2000;

    let timeout;
    const currentTitle = titles[currentTitleIdx];

    if (!isDeleting && displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayAfterFull);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIdx]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <header className="relative w-full max-w-[1440px] mx-auto min-h-[800px] bg-[#1D2022FF] flex flex-col md:block">
      
     {/* ✅ SVG + Sticky Notes container */}
<div className="relative w-full md:absolute md:right-0 md:top-0 md:w-[60%] md:max-w-[450px]">
  {/* --- Glow behind blob --- */}
  <div
    className="absolute z-10 pointer-events-none"
    style={{
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      filter: 'blur(32px)',
      opacity: 0.7,
      background: 'radial-gradient(circle, #00ffff99 0%, #00ffff33 60%, transparent 100%)'
    }}
  />
  {/* --- Sticky notes --- */}
  <div className="hidden md:block absolute top-[260px] left-[0%] z-20 bg-[rgba(2,0,36,0.1)] backdrop-blur-md text-[#00FFFF] px-4 py-2 rounded-[8px] text-[14px] font-['Nunito'] shadow-md">
    Projects Completed 5+
  </div>
  <div className="hidden md:block absolute top-[350px] right-[15%] z-20 bg-[rgba(2,0,36,0.1)] backdrop-blur-md text-[#00FFFF] px-4 py-2 rounded-[8px] text-[14px] font-['Nunito'] shadow-md">
    Let’s Build Together
  </div>
  {/* --- SVG blob --- */}
  <svg
  viewBox="0 0 720 629"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-auto relative z-10"
>
  <defs>
    <clipPath id="blobClip">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
      />
    </clipPath>

    {/* ✅ Animated radial gradient */}
    <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8">
        <animate
          attributeName="stop-opacity"
          values="0.8;0.3;0.8"
          dur="5s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="100%" stopColor="#00FFFF" stopOpacity="0">
        <animate
          attributeName="stop-opacity"
          values="0;0.5;0"
          dur="5s"
          repeatCount="indefinite"
        />
      </stop>
    </radialGradient>
  </defs>

  <g clipPath="url(#blobClip)">
    <rect width="100%" height="100%" fill="url(#pulseGradient)" />
    <image
      href={MyPf}
      width="80%"
      height="80%"
      x="110"
      y="128"
      preserveAspectRatio="xMidYMid slice"
    />
  </g>
</svg>

  {/* --- Sticky notes for mobile --- */}
  <div className="block md:hidden mt-4 text-[#00FFFF] px-4 py-2 rounded-[8px] text-[14px] font-['Nunito'] shadow-md bg-[rgba(2,0,36,0.1)] backdrop-blur-md w-fit mx-auto mb-2">
    Projects Completed 5+
  </div>
  <div className="block md:hidden text-[#00FFFF] px-4 py-2 rounded-[8px] text-[14px] font-['Nunito'] shadow-md bg-[rgba(2,0,36,0.1)] backdrop-blur-md w-fit mx-auto">
    Let’s Build Together
  </div>
</div>



      {/* ✅ Info Container below */}
   {/* ✅ Neon Glow Info Container - Transparent, No Border */}
<div
  className="
    relative
    w-[90%] sm:w-[320px] md:w-[486px]
    mx-auto md:absolute
    md:left-[120px] md:top-[111px]
    mt-5 md:mt-0
    z-30
  "
>
  <div
    className="
      flex flex-col items-start gap-3
      w-full
      p-6
      rounded-2xl
      bg-transparent
      backdrop-blur
      transition-all duration-300
      hover:shadow-[0_0_40px_#00ffff40]
    "
  >
    {/* ✅ Typewriter text */}
    <p className="w-full text-[20px] sm:text-[24px] md:text-[28px] leading-[24px] sm:leading-[26px] md:leading-[27px] font-bold uppercase text-[#00CED1] font-['Nunito'] flex items-center min-h-[32px] sm:min-h-[40px] md:min-h-[48px]">
      <span
        className="
          text-[32px] sm:text-[40px] md:text-[48px] font-extrabold
          bg-gradient-to-r
          from-[#8f00ff] via-[#EE82EE] to-[#00FFFF]
          bg-[200%_auto]
          text-transparent bg-clip-text
          animate-gradient-x
        "
      >
        &lt;/&gt;
      </span>&nbsp;
      {displayText}
      <span
        className={`ml-1 text-[32px] sm:text-[40px] md:text-[48px] font-extrabold transition-opacity duration-200 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </span>
    </p>

    {/* ✅ Main Heading */}
    <h1 className="w-full text-[28px] sm:text-[40px] md:text-[64px] leading-[110%] md:leading-[120%] font-bold font-['Playfair_Display'] text-[#00FFFF] text-left md:text-center">
      Hello, my name is{" "}
      <span
        className="
          bg-gradient-to-r
          from-[#8f00ff] via-[#EE82EE] to-[#00FFFF]
          bg-[200%_auto]
          text-transparent bg-clip-text
          animate-gradient-x
        "
      >
        Haroon Nasim
      </span>
    </h1>

    {/* ✅ Description */}
    <div className="flex flex-col items-start gap-[12px] w-full">
      <p className="w-full text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[36px] font-normal text-[#828282] font-['Nunito']">
       I design and build seamless, modern digital experiences by combining full-stack development with AI-powered solutions. My mission is to make technology intelligent, intuitive, and visually compelling — bridging functionality with user-centered design.
      </p>
    </div>

  {/* ✅ Buttons */}
<div className="flex flex-row flex-wrap items-start gap-[12px] w-full max-w-[244px] h-auto">
  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
    <button className="flex flex-row items-center justify-center px-4 py-2 w-auto min-w-[100px] sm:min-w-[110px] md:min-w-[115px] h-[40px]  rounded-[8px] font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] font-['Roboto'] text-[#000000] bg-[#00FFFF] transition duration-200 ease-in-out hover:bg-[#EE82EE] hover:text-black active:fill-[#EE82EE] active:opacity-100 active:scale-95">
      Resume
    </button>
  </a>

  <a href="https://linkedin.com/in/haroon-nasim-6a8432375" target="_blank" rel="noopener noreferrer">
  
  <button className="flex flex-row items-center justify-center px-4 py-2 w-auto min-w-[100px] sm:min-w-[110px] md:min-w-[117px] h-[40px] border-2 border-[#00FFFF] rounded-[8px] font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[27px] font-['Roboto'] text-[#00FFFF] transition duration-200 ease-in-out hover:bg-[#00ced1] hover:text-black active:fill-[#EE82EE40] active:opacity-100active:scale-95">
    Linkedin
  </button>
</a>
</div>

  </div>
</div>


    </header>
  );
};

export default Header;
