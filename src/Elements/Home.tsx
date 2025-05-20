import React, { useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Education from './Education';
import HomeSkills from './Skills';
import Projects from './Projects';
import ContactUs from './Contact';
import AboutMe from './AboutMe';
import Footer from './Footer';

const Home: React.FC = () => {
  const [data, setData] = useState(false);
  const [scrollProgress] = useState(0);

  const toggleBackground = () => {
    setData(!data);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full transition-all duration-75 ease-out"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: data ? '#3B82F6' : '#2563EB',
            transform: 'translate3d(0,0,0)',
            willChange: 'width'
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative"
        style={{
          backgroundColor: data ? 'black' : 'white',
          color: data ? 'white' : 'black',
          paddingTop: '0.5rem'
        }}
      >
        <header>
          <Navbar method={toggleBackground} data={data} />
          <div id="main"><Main data={data} /></div>
          <div id="about"><AboutMe /></div>
          <div id="education"><Education /></div>
          <div id="skills"><HomeSkills /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><ContactUs /></div>
          <div id="footer"><Footer /></div>
        </header>
      </div>
    </div>
  );
};

export default Home;
