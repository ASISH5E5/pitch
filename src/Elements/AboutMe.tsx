import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import i1 from '../Images/My_Image-removebg-preview.png';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      className="bg-gray-50 p-24 pt-8 dark:bg-black dark:text-white "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Card className="h-[450px] w-5/6 mx-auto mt-14  dark:text-white dark:bg-gray-900">
        <CardContent className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-2 m-4 mb-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col h-full w-full items-center justify-center"
            >
              <div className="relative w-4/5 h-7/10 bg-blue-600 rounded-full overflow-hidden ">
                <img 
                  src={i1}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 "
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1 dark:text-white ">About Me</h1>
                <h2 className="text-xl text-blue-600 font-semibold mb-2">
                  Aspiring Software Developer
                </h2>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  I'm a 2025 graduate and a passionate full-stack developer with a strong focus on building interactive, responsive, and user-friendly web applications. I’ve worked on both the front-end and back-end using technologies like React and Express, and I love creating clean, functional solutions that deliver great user experiences.
                  Feel free to move forward while exploring my work!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="dark:text-white">+1-202-555-0138</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="dark:text-white">henrysmith@gmail.com</span>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1rAkrmKWvDoKKGaqQ--gGA9YhNopNAvac/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                    Download Resume
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMe;
