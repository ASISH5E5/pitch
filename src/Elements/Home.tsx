import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Education from './Education';
import HomeSkills from './Skills';
import Projects from './Projects';
import ContactUs from './Contact';

const Home = () => {
    const [data, setData] = React.useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleBackground = () => {
        setData(!data);
    };

    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = useCallback(() => {
        let ticking = false;

        const updateProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            
            setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
            ticking = false;
        };

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
            });
            ticking = true;
        }
    }, []);

    useEffect(() => {
        // Add passive scroll listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial progress calculation
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="relative">
            {/* Top Progress Bar with smooth transition */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div 
                    className="h-full transition-all duration-75 ease-out"
                    style={{ 
                        width: `${scrollProgress}%`,
                        backgroundColor: data ? '#3B82F6' : '#2563EB',
                        transform: 'translate3d(0,0,0)', // Force GPU acceleration
                        willChange: 'width' // Hint to browser about animation
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative" style={{ 
                backgroundColor: data ? 'black' : 'white', 
                color: data ? 'white' : 'black',
                paddingTop: '0.5rem'
            }}>
                <header>
                    <Navbar method={toggleBackground} data={data} />
                    <div id='main'><Main data={data}/></div>
                    <div id='education'><Education /></div>
                    <div id='skills'><HomeSkills/></div>
                    <div id='projects'><Projects/></div>
                    <div id='contact'><ContactUs/></div>
                </header>
            </div>
        </div>
    );
};

export default Home;