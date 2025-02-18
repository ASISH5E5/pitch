
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import ed from '../Images/zph.jpeg';
import image3 from '../Images/vit.avif';
import imag4 from '../Images/hqdefault.jpg';

const educationData = [
  {
    year: "2021-2025",
    degree: "Bachelor's Degree",
    field: "Computer Science and Engineering",
    institution: "Vishnu Institute of Technology, Bhimavaram.[VITB]",
    score: "CGPA : 8.5",
    image: image3,
    id: 1,
  },
  {
    year: "2019-2021",
    degree: "Intermediate Education",
    field: "",
    institution: "Aditya Junior College Palakollu",
    score: "Percentage : 93",
    image: imag4,
    id: 2,
  },
  {
    year: "2018-2019",
    degree: "Secondary Education",
    field: "",
    institution: "Z. P. O. H. School Gummaluru",
    score: "CGPA : 9.3",
    image: ed,
    id: 3,
  },
];

interface EdProp{
  data:any;
}

const Education:React.FC<EdProp> = ({ data }) => {  // Accept the 'data' prop to toggle background color
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div className={`min-h-screen flex justify-center items-center p-6  ${data ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-500">Education</h2>
        </div>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex items-center  relative`}
              >
                {/* Dot */}
                <div className="w-4 h-4 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 px-6 text-left`}>
                  <div className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 
                    ${data ? 'bg-black text-white border-[1px] border-green-400' : 'bg-white text-black'}`}>
                    <h4 className="text-green-500 font-semibold">{edu.year}</h4>
                    <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                    {edu.field && <p className="text-lg mt-1">{edu.field}</p>}
                    <p className="text-gray-500 mt-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.score}</p>
                  </div>
                </div>

                {/* Image */}
                <div className={`hidden md:block w-1/2 px-6 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <img src={edu.image} alt={`${edu.degree} campus`} className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
