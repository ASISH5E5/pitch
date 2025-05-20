import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const SECTION_SEQUENCE = [
  { id: 'main', name: '' },
  { id: 'about', name: '' },
  { id: 'education', name: '' },
  { id: 'skills', name: '' },
  { id: 'projects', name: '' },
  { id: 'contact', name: '' }
];

const ScrollArrow = ({ darkMode = false }) => {
  const [isLastSection, setIsLastSection] = useState(false);

  const getCurrentSectionIndex = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = SECTION_SEQUENCE.length - 1; i >= 0; i--) {
      const section = document.getElementById(SECTION_SEQUENCE[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  useEffect(() => {
    const checkSection = () => {
      const currentIndex = getCurrentSectionIndex();
      setIsLastSection(currentIndex === SECTION_SEQUENCE.length - 1);
    };

    window.addEventListener('scroll', checkSection);
    checkSection(); // Initial check
    
    return () => window.removeEventListener('scroll', checkSection);
  }, []);

  const handleClick = () => {
    if (isLastSection) {
      // Scroll to top if we're at the last section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to next section
      const currentIndex = getCurrentSectionIndex();
      const nextIndex = (currentIndex + 1) % SECTION_SEQUENCE.length;
      const nextSection = document.getElementById(SECTION_SEQUENCE[nextIndex].id);
      
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-8 cursor-pointer z-50 flex flex-col items-center"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
    >
      {/* Section label */}
      <div className={`mb-1 text-sm font-medium ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {isLastSection ? '' : SECTION_SEQUENCE[(getCurrentSectionIndex() + 1) % SECTION_SEQUENCE.length].name}
      </div>
      
      {/* Arrow button */}
      <div className={`p-1 rounded-full ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-500`}>
        {isLastSection ? (
          <ChevronUp 
            size={24} 
            className={`${
              darkMode ? 'text-white' : 'text-gray-500'
            } transition-colors duration-300 hover:text-blue-500`}
          />
        ) : (
          <ChevronDown 
            size={24} 
            className={`${
              darkMode ? 'text-white' : 'text-gray-500'
            } transition-colors duration-300 hover:text-blue-500`}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ScrollArrow;