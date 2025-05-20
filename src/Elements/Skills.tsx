import { useRef } from "react";
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { SiExpress, SiFirebase, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    description: "Expertise in multiple programming languages with a focus on building robust and efficient applications.",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "SQL", icon: <BsFileEarmarkCodeFill /> }
    ]
  },
  {
    title: "Web Development",
    description: "Creating responsive and dynamic web applications using modern frameworks and libraries.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "NodeJS", icon: <DiNodejs /> },
      { name: "ExpressJS", icon: <SiExpress /> }
    ]
  },
  {
    title: "Databases",
    description: "Experience with both SQL and NoSQL databases for efficient data storage and retrieval.",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> }
    ]
  },
  {
    title: "Other Tools",
    description: "Proficiency with various development tools and version control systems.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <BsFileEarmarkCodeFill /> },
      { name: "Docker", icon: <BsFileEarmarkCodeFill /> }
    ]
  }
];

const HomeSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className="py-8 bg-indigo-50 dark:bg-gray-800 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-8 relative my-auto">
        {/* Left side content */}
        <div className="flex flex-col md:flex-row py-16">
          <div className="md:w-1/3 mb-12 md:mb-0 pr-0 md:pr-8 py-10">
            <motion.p 
              className="text-indigo-500 font-medium tracking-wider mb-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MY SKILLS
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-indigo-900  dark:text-indigo-600 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Things I can do for my clients
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 dark:text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From offering in-depth user research to helping with design and testing, I can help bring your product to life.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                Hire Me
              </button>
              <button className="text-indigo-600 py-3 px-6 border border-indigo-300 rounded-lg hover:bg-indigo-100 transition duration-300">
                Download CV
              </button>
            </motion.div>
          </div>

          {/* Right side grid of cards */}
          <div 
            ref={ref}
            className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-auto relative"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="perspective-1000"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2 + (index * 0.1)
                }}
              >
                <motion.div 
                  className="bg-white p-4 rounded-xl shadow-md transform dark:bg-gray-700 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
                  whileHover={{ 
                    rotateX: index % 2 === 0 ? -5 : 5,
                    rotateY: index < 2 ? 5 : -5,
                    translateZ: -20,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3 dark:text-indigo-600">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4  dark:text-gray-200">{category.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="flex  items-center gap-1 text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                        <span className="text-indigo-600 text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

       
          </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default HomeSkills;