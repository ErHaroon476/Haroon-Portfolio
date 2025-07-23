import React from 'react';
import lineVector from '../../assets/linevector.svg';
import pro1 from '../../assets/rentalevbike.png';
import pro2 from '../../assets/embedd.png';
import pro3 from '../../assets/aiweb.jpg';

const Projects = () => {
  return (
    <div
      id="projects"
      className="
        scroll-mt-[76px]
        flex flex-col items-center
        gap-[80px]
        relative
        w-full max-w-[992px]
        mx-auto
        py-20 px-4
      "
    >
      {/* Projects Heading */}
      <div className="flex flex-col items-center gap-2">
        <h2
          className="
            text-5xl md:text-6xl font-bold text-center
            bg-gradient-to-r from-[#00ffff] via-[#00ffff] to-[#00ffff]
            text-transparent bg-clip-text
            animate-pulse
          "
        >
          Projects
        </h2>
        <img src={lineVector} alt="Line Vector" className="w-[100px] h-[4px]" />
      </div>

      {/* Project 1 */}
      <div
  className="
    flex flex-col md:flex-row md:items-center items-start
    w-full overflow-hidden rounded-2xl
    bg-[#0f172a] border border-[#00ffff40]
    shadow-lg
    transition hover:shadow-[0_0_40px_#00ffff30]
  "
  data-aos="fade-up"
  data-aos-delay="100"
>  <img
          src={pro1}
          alt="Rental Ev Bikes Management and Monitoring System"
          className="w-full md:w-1/2 h-[250px] md:h-auto object-cover rounded-lg shadow"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">
            Rental Ev Bikes Management and Monitoring System
          </h3>
          <p className="text-gray-300 mb-6">
            We developed a smart EV rental and monitoring system featuring a mobile app for unlocking bikes via OTP through bike keypad , live ride tracking, and time monitoring. An admin web portal allows full fleet management. Additionally, we built custom hardware for accident detection, emergency calling, and real-time GPS tracking to ensure safety and efficient operations.
          </p>
          <a
            href="/fyp.pdf " target="_blank" rel="noopener noreferrer"
            className="inline-block border border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-full hover:bg-[#00ffff] hover:text-black transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 2 */}
   <div
  className="
    flex flex-col md:flex-row-reverse md:items-center items-start
    w-full overflow-hidden rounded-2xl
    bg-[#0f172a] border border-[#00ffff40]
    shadow-lg
    transition hover:shadow-[0_0_40px_#00ffff30]
  "
  data-aos="fade-up"
  data-aos-delay="200"
>
        <img
          src={pro2}
          alt="Embedded Environment System"
          className="w-full md:w-1/2 h-[250px] md:h-auto object-cover rounded-lg shadow"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">
            EMBEDDED ENVIRONMENT MONITORING SYSTEM
          </h3>
          <p className="text-gray-300 mb-6">
            An IoT-based embedded system designed to enhance safety in indoor spaces such as kitchens, labs, and small industrial setups. It continuously monitors gas levels, AQI, and temperature in real-time. When any value exceeds safe limits, it automatically sends alerts and activates a buzzer to warn occupants.

            The system is compact, reliable, and ideal for preventing accidents caused by gas leaks, poor air quality, or overheating. It ensures continuous environmental surveillance, offering an affordable and responsive safety solution for enclosed areas.
          </p>
          <a
            href="/ess.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-block border border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-full hover:bg-[#00ffff] hover:text-black transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div
  className="
    flex flex-col md:flex-row md:items-center items-start
    w-full overflow-hidden rounded-2xl
    bg-[#0f172a] border border-[#00ffff40]
    shadow-lg
    transition hover:shadow-[0_0_40px_#00ffff30]
  "
  data-aos="fade-up"
  data-aos-delay="300"
>
        <img
          src={pro3}
          alt="AI Web Integrations"
          className="w-full md:w-1/2 h-[250px] md:h-auto object-cover rounded-lg shadow"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">
            INTELLIGENT AI-POWERED WEB INTEGRATION SYSTEM
          </h3>
          <p className="text-gray-300 mb-6">
            A smart web-based solution that integrates advanced AI models like OpenAI and DeepSeek into modern websites. It enables dynamic interaction through intelligent chatbots and real-time responses, enhancing user experience and engagement.

            The system uses structured prompts and ChatML to provide contextual and relevant replies, making websites more intuitive and responsive. Designed with scalability in mind, it supports multiple AI providers and is ideal for customer support, education, or productivity-based platforms.
          </p>
          <a
            href="#contact"
            className="inline-block border border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-full hover:bg-[#00ffff] hover:text-black transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
