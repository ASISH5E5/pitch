import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import im1 from "../Images/port2.jpg";
import ScrollArrow from './ArrowButton';

// AnimatedBackground Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-48 -left-0 w-24 h-24 bg-indigo-200 rounded-full opacity-30"
        animate={{
          y: [-20, 10, -20],
          x: [-20,0, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-10 w-48 h-48 bg-indigo-200 rounded-full opacity-30"
        animate={{
          y: [-20, 40, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-12 right-0 w-24 h-24 bg-indigo-200 rounded-full opacity-30"
        animate={{
          y: [-15, 15, -15],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute -top-12 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
        animate={{
          y: [-25, 25, -25],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  const letters = "ASISH".split("");
  
  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-6xl font-bold text-blue-500 mx-2"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

// Social Button Component
const SocialButton = ({ icon: IconComponent, href, label, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full border-2 border-blue-500 hover:border-blue-600 transition-colors"
      aria-label={label}
    >
      <IconComponent size={20} className={isHovered ? "text-blue-500" : "text-white"} />
    </motion.a>
  );
};

// Main Component
const Main = ({ data }) => {
  const [showLoading, setShowLoading] = useState(true);
  
  const [head] = useTypewriter({
    words: ['Frontend Developer', 'Web Developer', 'Software Developer'],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`relative min-h-screen ${data ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
        <AnimatedBackground />
        
        <AnimatePresence>
          {showLoading && <LoadingAnimation className="font-style: italic" />}
        </AnimatePresence>

        {!showLoading && (
          <div className="max-w-7xl mx-auto px-8 pt-20">
            <div className="grid grid-cols-1 ml-12 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-left"
              >
                <h1 className={`text-5xl font-bold ${data ? 'text-white' : 'text-gray-800'}`}>
                  Hi, I'm Asish
                </h1>
                <h2 className="text-3xl text-blue-500 font-bold h-[40px]">
                  {head}
                  <Cursor />
                </h2>
                <p className={`${data ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora ex nisi dolore sequi voluptatibus! Ducimus aliquam inventore alias iusto harum, officia quibusdam.
                </p>
                
                <div className="flex space-x-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Hire Me
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-md ${
                      data ? 'hover:bg-gray-800' : 'hover:bg-blue-50'
                    } transition-colors`}
                  >
                    Let's Talk
                  </motion.button>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative w-98 h-96 max-h-108 ml-12 bottom-2 overflow-hidden rounded-3xl">
                  <img
                    src={im1}
                    alt="Profile"
                    className="w-full h-108 object-cover object-center"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/20"
                  />
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bottom-1 left-1/3 transform -translate-x-1/2 flex items-center justify-center space-x-8"
            >
              <SocialButton icon={FaLinkedin} href="#" label="LinkedIn" delay={0} />
              <SocialButton icon={FaGithub} href="#" label="GitHub" delay={0.5} />
              <SocialButton icon={MdEmail} href="mailto:your@email.com" label="Email" delay={1} />
              <SocialButton icon={MdPhone} href="tel:+1234567890" label="Phone" delay={1.5} />
            </motion.div>
          </div>
        )}
      </div>
      {!showLoading && <ScrollArrow />} 
    </>
  );
};

export default Main;