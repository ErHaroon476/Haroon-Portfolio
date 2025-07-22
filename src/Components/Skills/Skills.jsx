import { useState } from "react";

const skillsData = [
  { name: "Python", categories: ["All", "AI/ML", "Backend", "Frontend"], color: "var(--accent-blue)" },
  { name: "TypeScript", categories: ["All", "Frontend", "Backend"], color: "var(--accent-blue)" },
  { name: "JavaScript", categories: ["All", "Frontend", "Backend"], color: "var(--accent-yellow)" },
  { name: "Bash", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "Git", categories: ["All", "Frontend", "Backend"], color: "var(--accent-orange)" },
  { name: "LLMs", categories: ["All", "AI/ML"], color: "var(--accent-purple)" },
  { name: "AI Agents", categories: ["All", "AI/ML"], color: "var(--accent-cyan)" },
  { name: "LangChain", categories: ["All", "AI/ML"], color: "var(--accent-green)" },
  { name: "Voice Assistants", categories: ["All", "AI/ML"], color: "var(--accent-pink)" },
  { name: "RAG Systems", categories: ["All", "AI/ML"], color: "var(--accent-red)" },
  { name: "Django", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "FastAPI", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "Celery", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "Express", categories: ["All", "Backend"], color: "var(--accent-yellow)" },
  { name: "Node.js", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "MongoDB", categories: ["All", "Backend"], color: "var(--accent-green)" },
  { name: "PostgreSQL", categories: ["All", "Backend"], color: "var(--accent-blue)" },
  { name: "Redis", categories: ["All", "Backend"], color: "var(--accent-red)" },
  { name: "Vector DBs", categories: ["All", "Backend", "AI/ML"], color: "var(--accent-purple)" },
  { name: "Docker", categories: ["All", "Backend"], color: "var(--accent-blue)" },
  { name: "React", categories: ["All", "Frontend"], color: "var(--accent-cyan)" },
  { name: "Next.js", categories: ["All", "Frontend"], color: "var(--accent-blue)" },
  { name: "+ More", categories: ["All"], color: "var(--accent-blue)" }
];

const categories = ["All", "AI/ML", "Backend", "Frontend"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter(skill => 
    skill.categories.includes(activeCategory)
  );

  return (
    <div 
      className="max-w-6xl mx-auto px-6 py-16"
      style={{ backgroundColor: "#1D2022FF", color: "var(--text-primary)" }}
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#00ffff]">
          Skills
        </h2>
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-4xl"
          style={{ color: "var(--text-secondary)" }}
        >
          Proficient in full-stack development with expertise in modern web technologies, backend systems, and AI/ML integration. 
          Specialized in building intelligent applications using Large Language Models, developing AI agents, and creating scalable 
          solutions that bridge traditional software engineering with cutting-edge AI capabilities.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              activeCategory === category
                ? "text-black"
                : "hover:text-white"
            }`}
            style={{
              backgroundColor: activeCategory === category 
                ? "var(--text-primary)" 
                : "var(--skill-bg)",
              color: activeCategory === category 
                ? "var(--dark-bg)" 
                : "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== category) {
                e.currentTarget.style.backgroundColor = "var(--accent-blue)";
                e.currentTarget.style.color = "white";
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== category) {
                e.currentTarget.style.backgroundColor = "var(--skill-bg)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 min-h-[200px]">
  {filteredSkills.map((skill, index) => (
    <div
      key={`${skill.name}-${activeCategory}`}
      className="flex items-center justify-center h-16" // Equal height
      data-aos="zoom-in"
      data-aos-delay={`${index * 50}`} // Optional animation stagger
    >
      <span
        className="w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 cursor-default border-l-4"
        style={{
          backgroundColor: "var(--skill-bg)",
          color: "var(--text-primary)",
          borderLeftColor: skill.color,
          height: "100%", // Equal height across all
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--skill-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--skill-bg)";
        }}
      >
        {skill.name === "+ More" ? (
          <>
            <span style={{ color: "var(--accent-blue)" }}>+</span> More
          </>
        ) : (
          skill.name
        )}
      </span>
    </div>
  ))}
</div>
   </div>
  );
}