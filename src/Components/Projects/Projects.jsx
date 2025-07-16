import React from 'react';
import lineVector from '../../assets/linevector.svg';

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
          flex flex-col md:flex-row items-start
          w-full overflow-hidden rounded-2xl
          bg-[#0f172a] border border-[#00ffff40]
          shadow-lg
          transition hover:shadow-[0_0_40px_#00ffff30]
        "
      >
        <img
          src=""
          alt="Project 1"
          className="w-full md:w-1/2 h-[250px] md:h-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">Project 1 Title</h3>
          <p className="text-gray-300 mb-6">
            A short description about this project. Explain what it does, the technologies used, or any other detail.
          </p>
          <a
            href="#"
            className="inline-block border border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-full hover:bg-[#00ffff] hover:text-black transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div
        className="
          flex flex-col md:flex-row-reverse items-start
          w-full overflow-hidden rounded-2xl
          bg-[#0f172a] border border-[#00ffff40]
          shadow-lg
          transition hover:shadow-[0_0_40px_#00ffff30]
        "
      >
        <img
          src=""
          alt="Project 2"
          className="w-full md:w-1/2 h-[250px] md:h-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">Project 2 Title</h3>
          <p className="text-gray-300 mb-6">
            Short description about Project 2. Mention key highlights, tools, or outcomes.
          </p>
          <a
            href="#"
            className="inline-block border border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-full hover:bg-[#00ffff] hover:text-black transition"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div
        className="
          flex flex-col md:flex-row items-start
          w-full overflow-hidden rounded-2xl
          bg-[#0f172a] border border-[#00ffff40]
          shadow-lg
          transition hover:shadow-[0_0_40px_#00ffff30]
        "
      >
        <img
          src=""
          alt="Project 3"
          className="w-full md:w-1/2 h-[250px] md:h-full object-cover"
        />
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-[#00ffff] mb-4">Project 3 Title</h3>
          <p className="text-gray-300 mb-6">
            Short description about Project 3. Add some key information or impact.
          </p>
          <a
            href="#"
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
