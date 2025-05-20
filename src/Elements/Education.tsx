import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const timelineData = [
    {
      id: 1,
      type: 'internship',
      title: 'Software Developer Intern',
      organization: 'Enligence AI LABS',
      duration: '2 Months',
      details: 'Onsite',
      year: '2025'
    },
    {
      id: 2,
      type: 'education',
      title: "Bachelor's Degree",
      organization: 'Vishnu Institute of Technology',
      duration: '2021-2025',
      details: 'Computer Science and Engineering',
      score: 'CGPA: 8.5'
    },
    {
      id: 3,
      type: 'education',
      title: 'Intermediate Education',
      organization: 'Aditya Junior College Palakollu',
      duration: '2019-2021',
      score: 'Percentage: 93'
    },
    
    {
      id: 4,
      type: 'education',
      title: 'Secondary Education',
      organization: 'Z. P. O. H. School Gummaluru',
      duration: '2018-2019',
      score: 'CGPA: 9.3'
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-1 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Journey</h2>
        
        <div className="relative" ref={ref}>
          {/* The main curved road */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="absolute h-full w-24 -ml-12">
              {/* Main curved line */}
              <svg 
  className="h-full w-full" 
  viewBox="0 0 100 100" 
  preserveAspectRatio="none"
>
  <path
    d="M50,0 L50,100"
    fill="none"
    stroke="#4F46E5"
    strokeWidth="4"
    strokeLinecap="round"
  />
</svg>


            </div>
          </div>

          {/* Timeline Items */}
          <div className="relative space-y-6">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center justify-center  dark:shadow-lg"
              >
                {/* Card Container */}
                <div 
                  className={`w-4/12 ${index % 2 === 0 ? 'mr-96 pr-12' : 'ml-96 pl-12'}`}
                >
                  <motion.div 
                    className={`p-4 rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-900 transition-all duration-300 
                      ${item.id%2===0
                        ? ' border-l-4 border-indigo-500' 
                        : ' border-l-4 border-emerald-500'
                      }`}
                    whileHover={{ y: -10 }}
                  >
                    <span className={`inline-block px-2 py-1 rounded-full text-sm font-medium mb-2
                      ${item.id%2===0
                        ? 'bg-indigo-100 text-indigo-800 ' 
                        : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.type === 'education' ? 'Education' : 'Internship'}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                    <p className="text- dark:text-gray-300 font-medium">{item.organization}</p>
                    <p className="text-gray-500 dark:text-gray-300">{item.duration}</p>
                    {item.details && <p className="text-gray-500 dark:text-gray-300">{item.details}</p>}
                    {item.score && <p className="text-gray-500 dark:text-gray-300 font-medium mt-1">{item.score}</p>}
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white
                  bg-indigo-500 shadow-lg z-10"/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        .path-animation {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawPath 3s ease-out forwards;
        }
        
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;