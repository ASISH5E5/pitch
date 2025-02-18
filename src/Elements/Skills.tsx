import React, { useRef } from "react";
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
    skills: ["Java", "Python", "JavaScript", "SQL"],
    icons: [<FaJava />, <FaPython />, <IoLogoJavascript />, <BsFileEarmarkCodeFill />]
  },
  {
    title: "Web Development",
    description: "Creating responsive and dynamic web applications using modern frameworks and libraries.",
    skills: ["React", "HTML", "CSS", "NodeJS", "ExpressJS"],
    icons: [<FaReact />, <FaHtml5 />, <FaCss3 />, <DiNodejs />, <SiExpress />]
  },
  {
    title: "Databases",
    description: "Experience with both SQL and NoSQL databases for efficient data storage and retrieval.",
    skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
    icons: [<SiMysql />, <DiMongodb />, <SiFirebase />, <BiLogoPostgresql />]
  },
  {
    title: "Other Tools",
    description: "Proficiency with various development tools and version control systems.",
    skills: ["Git", "GitHub", "VS Code", "Docker"],
    icons: [<FaGitAlt />, <FaGithub />, <BsFileEarmarkCodeFill />, <BsFileEarmarkCodeFill />]
  }
];

const HomeSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className="py-16 bg-indigo-50 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-8 relative my-auto ">
        {/* Left side content */}
        <div className="flex flex-col md:flex-row py-16" >
          <div className="md:w-1/3 mb-12 md:mb-0 pr-0 md:pr-8 py-20">
            <motion.p 
              className="text-indigo-500 font-medium tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MY SKILLS
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Things I can do for my clients
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
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
                  className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
                  whileHover={{ 
                    rotateX: index % 2 === 0 ? -5 : 5,
                    rotateY: index < 2 ? 5 : -5,
                    translateZ: -20,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-indigo-600">
                    {category.icons.slice(0, 3).map((icon, i) => (
                      <span key={i} className="text-lg">{icon}</span>
                    ))}
                    {category.skills.length > 3 && 
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                        +{category.skills.length - 3}
                      </span>
                    }
                  </div>
                 
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background decoration elements */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-200 rounded-full opacity-30 z-0"></div>
        <div className="absolute top-12 right-0 w-24 h-24 bg-indigo-200 rounded-full opacity-30 z-0"></div>
        <div className="absolute -top-12 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-20 z-0"></div>
      </div>

      {/* Add custom CSS for the perspective effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default HomeSkills;