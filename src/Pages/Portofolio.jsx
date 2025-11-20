import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, Award, Code } from "lucide-react";
import { projects as staticProjects } from "../data/projects";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#a855f7]/50 hover:shadow-lg hover:shadow-[#6366f1]/20"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-20 h-20 text-[#a855f7]/30" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          {project.Title}
        </h3>
        
        <p className="text-gray-300/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.Description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.TechStack?.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-[#6366f1]/20 text-[#a855f7] rounded-full text-xs border border-[#a855f7]/30"
            >
              {tech}
            </span>
          ))}
          {project.TechStack?.length > 3 && (
            <span className="px-2 py-1 bg-[#6366f1]/20 text-[#a855f7] rounded-full text-xs border border-[#a855f7]/30">
              +{project.TechStack.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {project.GitHub && (
            <a
              href={project.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TechStackItem = ({ name, icon }) => {
  const [showFallback, setShowFallback] = useState(!icon);
  
  return (
    <div
      className="group bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#a855f7]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/20 flex flex-col items-center justify-center min-h-[140px]"
      data-aos="zoom-in"
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        {icon && !showFallback ? (
          <img
            src={`/${icon}`}
            alt={name}
            className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            onError={() => setShowFallback(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center border-2 border-[#a855f7]/30 group-hover:border-[#a855f7]/50 transition-colors">
            <span className="text-2xl font-bold text-[#a855f7]">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <span className="text-white font-medium text-sm text-center mt-2">{name}</span>
    </div>
  );
};

export default function Portofolio() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const techStacks = [
    { name: "Python", icon: null },
    { name: "C++", icon: null },
    { name: "Java", icon: null },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "SQL", icon: null },
    { name: "Django", icon: null },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "GitHub", icon: null },
    { name: "SQLite", icon: null },
    { name: "MySQL", icon: null },
    { name: "Scikit-learn", icon: null },
    { name: "TensorFlow", icon: null },
    { name: "Keras", icon: null },
    { name: "Pandas", icon: null },
    { name: "NumPy", icon: null },
    { name: "Statsmodels", icon: null },
    { name: "Matplotlib", icon: null },
    { name: "Seaborn", icon: null },
    { name: "LaTeX", icon: null },
    { name: "BeautifulSoup", icon: null },
    { name: "GradCam", icon: null },
    { name: "ARIMA", icon: null },
    { name: "SARIMA", icon: null },
  ];

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden pb-20" id="Portofolio">
      {/* Projects Section */}
      <div className="mb-20">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            <span
              style={{
                color: "#6366f1",
                backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
            Explore my projects showcasing expertise in Data Science, Machine Learning, Full-Stack Development, and DSA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-20">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            <span
              style={{
                color: "#6366f1",
                backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
            View all my professional certifications and completed courses
          </p>
        </div>

        <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
          <a
            href="https://www.coursera.org/user/d907e942cd5c189a4b9c29d1f233fea7"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/30"
          >
            <Award className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>View All Certifications on Coursera</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div>
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            <span
              style={{
                color: "#6366f1",
                backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-4">
            Technologies, tools, and frameworks I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {techStacks.map((tech, index) => (
            <TechStackItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              data-aos-delay={index * 50}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
