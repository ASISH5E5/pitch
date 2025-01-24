import  { useState, useEffect } from 'react';

import { ChevronRight } from 'lucide-react';
import GPSAnalogy from './GPSAnalogy';
import data from '../ElementsData/data.json'
const VisionSlide = () => {
  const [show, setShow] = useState(false);
const {mainStatement}=data.VisionSlide;
  if (show) {
    return <GPSAnalogy onBack={() => setShow(false)} />;
  }
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  
  return (
    <div className="w-full h-screen  mx-auto p-8 flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="space-y-16">
        {/* Vision Statement */}
        <div className="relative">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            {mainStatement.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="flex justify-center items-center text-4xl md:text-5xl font-light w-full"
              >
                {line.words.map((word, wordIndex) => (
                  <span
                    key={`${lineIndex}-${wordIndex}`}
                    className={`transition-all w-full duration-1000 transform whitespace-pre
                      ${word.highlight ? 'text-blue-600 font-medium' : 'text-gray-700'}
                      ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                    `}
                    style={{ transitionDelay: `${(lineIndex * 3 + wordIndex) * 100}ms` }}
                  >
                    {word.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 animate-pulse" />
          </div>
        </div>
        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-700 transform
            ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
          style={{ transitionDelay: '1200ms' }}
        >
          <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Explore the GPS Analogy
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default VisionSlide;