import React, { useEffect, memo } from "react";
import {
  FileText,
  Code,
  Award,
  Sparkles,
  UserCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>
      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src="/Photo.png"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Milind Kashyap
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I'm a B.Tech Computer Science student at Bennett University, Greater Noida, with a passion for Data Science, Machine Learning, DSA, and Full-Stack Development. Currently maintaining a CGPA of 9.09/10, I've been selected for competitive internships and have developed multiple projects spanning from disease prediction using ML/DL to sports analytics with time-series forecasting. My expertise includes Python, C++, Django, Data Structures & Algorithms, and various ML libraries. I secured 3rd place in Smart India Hackathon 2024 and have completed 15+ Coursera certifications in Data Science and DSA.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a
                href=""
                className="w-full lg:w-auto"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Academic Details Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Academic Details
          </h3>
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-lg font-semibold text-white">B.Tech in Computer Science</h4>
                  <p className="text-gray-400">Bennett University, Greater Noida, Uttar Pradesh</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium">2022 - 2026</p>
                  <p className="text-[#a855f7] font-semibold">CGPA: 9.09/10</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-lg font-semibold text-white">12th CBSE Board</h4>
                  <p className="text-gray-400">The Adhyyan School, Meerut</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium">2020</p>
                  <p className="text-[#a855f7] font-semibold">95.8%</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">10th CBSE Board</h4>
                  <p className="text-gray-400">The Adhyyan School, Meerut</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium">2020</p>
                  <p className="text-[#a855f7] font-semibold">96.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-12" data-aos="fade-up" data-aos-duration="1200">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Work Experience & Internships
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#a855f7]/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-white">Data Science Intern</h4>
                  <p className="text-gray-400">Bennett University</p>
                </div>
                <span className="text-sm text-[#a855f7] font-medium mt-2 md:mt-0">1st July 2024 - 31st July 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Selected as one of only 4 students for a competitive Summer internship program</li>
                <li>Developed "Explainable-AI-Scene-Classification-and-GradCam-Visualization" project</li>
                <li>Gained hands-on experience with Neural Networks, GradCam, and Deep Learning models</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#a855f7]/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-white">Intern</h4>
                  <p className="text-gray-400">CollegeTips Ed. Tech. Media Pvt. Ltd.</p>
                </div>
                <span className="text-sm text-[#a855f7] font-medium mt-2 md:mt-0">Summer Internship Program 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>Participated in a Summer internship program, working on various tasks and projects</li>
                <li>Developed practical experience and professional skills in a remote working environment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-12" data-aos="fade-up" data-aos-duration="1400">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "Java", "SQL", "HTML", "CSS", "LaTeX", "JavaScript"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#6366f1]/20 text-[#a855f7] rounded-full text-sm border border-[#a855f7]/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Concepts & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["DSA", "OOPs", "Machine Learning", "Deep Learning", "Neural Networks", "Time Series Forecasting", "Data Science", "UI/UX", "SDLC", "Computer Vision", "Natural Language Processing"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#6366f1]/20 text-[#a855f7] rounded-full text-sm border border-[#a855f7]/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Tools & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {["Django", "Bootstrap", "GitHub", "SQLite", "MySQL", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Statsmodels", "Matplotlib", "Seaborn", "BeautifulSoup", "GradCam", "ARIMA", "SARIMA"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#6366f1]/20 text-[#a855f7] rounded-full text-sm border border-[#a855f7]/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12" data-aos="fade-up" data-aos-duration="1600">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Achievements
          </h3>
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#a855f7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">3rd Place in Smart India Hackathon (SIH) 2024</p>
                  <p className="text-gray-400 text-sm">For developing "DigiMineX" - Smart task and info hub for mine workers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#a855f7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">15+ Coursera Certificates</p>
                  <p className="text-gray-400 text-sm">Completed courses in Data Science, Data Structures and Algorithms, Machine Learning</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#a855f7] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Dean's Award 2025</p>
                  <p className="text-gray-400 text-sm">For excellent academic performance</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
