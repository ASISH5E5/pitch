import  { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = (props: { data: any; method: () => void; }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < lastScrollPosition;
      
      setScrollPosition(currentScrollPos);
      setLastScrollPosition(currentScrollPos);
      
      if (currentScrollPos < 50) {
        setIsVisible(true);
      } else if (isScrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  const navbarVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={navbarVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center "
        >
          <nav
            className={`transition-all duration-300 ${
              scrollPosition > 50 
                ? 'w-2/3 mt-4 rounded-full bg-white-90 backdrop-blur-sm shadow-lg border border-blue-300' 
                : 'w-full bg-white border-b border-blue-300'
            }`}
          >
            <div className={`mx-auto py-4  ${scrollPosition > 50 ? 'max-w-full bg-white border border-blue-300 rounded-full py-1 px-6' : 'container  border border-blue-300 py-6'} ${props.data ? 'bg-black text-white' : 'bg-gray-50 text-black'}   ${scrollPosition ==0 ? 'border-none w-full ':''}`}>
              <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-sky-600 text-3xl font-bold font-serif mr-16">
                  <span className="text-red-600 font-cursive">A</span>sish
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex text-lg items-center space-x-8">
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                   <a href="#main">Home</a> 
                  </button>
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                  <a href="#about">About Me</a> 
                  </button>
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                  <a href="#education">My Journey</a> 
                  </button>
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                  <a href="#skills">Skills</a> 
                  </button>
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                  <a href="#projects">Projects</a> 
                  </button>
                  <button className="text-sky-600 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors font-serif">
                  <a href="#contact">Contact</a> 
                  </button>
                  <button 
                    onClick={() => props.method()}
                    className="text-sky-600 hover:text-gray-500 transition-colors"
                  >
                    <IoIosSunny size={30} />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-sky-600 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      {isMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50"
              >
                <button
                  className="absolute top-4 right-4 text-sky-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex flex-col text-lg items-start p-4 space-y-4 mt-12">
                  <button className="text-sky-700 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full w-full text-left transition-colors font-serif">
                    Education
                  </button>
                  <button className="text-sky-700 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full w-full text-left transition-colors font-serif">
                    Profiles
                  </button>
                  <button className="text-sky-700 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full w-full text-left transition-colors font-serif">
                    Work Experience
                  </button>
                  <button className="text-sky-700 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full w-full text-left transition-colors font-serif">
                    Projects
                  </button>
                  <button className="text-sky-700 hover:text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full w-full text-left transition-colors font-serif">
                    Skills
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;