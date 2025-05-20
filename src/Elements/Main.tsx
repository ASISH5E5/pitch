import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ScrollArrow from './ArrowButton';
import img2 from '../Images/My_Image-removebg-preview.png';

interface MainProp {
  data: boolean;
  className?: string;
}

const LoadingAnimation: React.FC<MainProp> = ({ }) => {
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

const Main: React.FC<MainProp> = ({ data }) => {
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
        <AnimatePresence>
          {showLoading && <LoadingAnimation className="font-style: italic" data={false} />}
        </AnimatePresence>

        {!showLoading && (
          <div className="max-w-full grid grid-cols-1 min-w-full px-10 pt-24 dark:bg-gray-900 " >
            <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-12 ml-24 items-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 10, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2 text-left"
              >
                <h1 className={`text-4xl font-bold  'text-white'  dark:text-white` }>Hi, I'm Asish</h1>
                <h2 className="text-2xl text-blue-500 font-bold ">{head}<Cursor /></h2>
                <p className={` dark:text-white max-w-lg`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora ex nisi dolore sequi voluptatibus! Ducimus aliquam inventore alias iusto harum, officia quibusdam.
                </p>
                <div className="flex h-14 w-30 space-x-4 pt-4 rounded-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-8 text-12 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Hire Me
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div 
                  className="relative w-80 h-80 max-h-108 mx-auto bottom-2 overflow-hidden bg-blue-700 border border-gray-900"
                  style={{
                    borderRadius: '60% 60% 60% 60% / 60% 60% 80% 80%',
                    animation: 'blobMove 12s ease-in-out infinite alternate'
                  }}
                >
                  <img
                    src={img2}
                    alt="Profile"
                    className="w-full h-84 mx-auto object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/20" />
                  <style jsx>{`
                    @keyframes blobMove {
                      0% { border-radius: 60% 60% 80% 60% / 60% 80% 80% 80%; }
                      20% { border-radius: 63% 57% 54% 66% / 58% 63% 77% 83%; }
                      40% { border-radius: 58% 62% 65% 55% / 63% 56% 84% 75%; }
                      60% { border-radius: 62% 58% 57% 63% / 55% 65% 73% 87%; }
                      80% { border-radius: 57% 63% 68% 52% / 65% 55% 70% 80%; }
                      100% { border-radius: 59% 61% 61% 59% / 59% 61% 79% 81%; }
                    }
                  `}</style>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="flex flex-cols-1 space-x-8 text-xl  pl-6 text-gray-500 dark:text-gray-100">
                <FaGithub className="cursor-pointer hover:text-blue-600 transition" />
                <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
                <MdEmail className="cursor-pointer hover:text-blue-600 transition" />
                <MdPhone className="cursor-pointer hover:text-blue-600 transition" />
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {!showLoading && <ScrollArrow />} 
    </>
  );
};

export default Main;

