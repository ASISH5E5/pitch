import React, { useState, useRef, useMemo, useEffect } from 'react';  
import { Switch } from '@/components/ui/switch';
import { X, Menu, ChevronLeft, ChevronRight } from "lucide-react"; 
import { Button } from '@/components/ui/button';
import { UserModal } from './UserForm';
import IntroSlide from './Elements/IntroSlide';

const mainNavigationItems = [
  { title: "Problem", showInCompact: true, url: "/pitch/slides/intro" },
  { title: "Solution", showInCompact: true, url: "/pitch/slides/solution" },
  { title: "Team", showInCompact: false, url: "/slides/team" },
  { title: "Market Size", showInCompact: true, url: "/pitch/slides/market-size" },
  { title: "Competition", showInCompact: false, url: "/pitch/slides/competetion" },
  { title: "GTM", showInCompact: false, url: "/pitch/slides/gtm" },
  { title: "Traction", showInCompact: true, url: "/pitch/slides/traction" },
  { title: "Our Ask", showInCompact: true, url: "/pitch/slides/our-ask" },
  { title: "Where This Can Go", showInCompact: false, url: "/pitch/slides/future" },
  { title: "Vision", showInCompact: false, url: "/pitch/slides/vision" },
  { title: "Next Steps", showInCompact: true, url: "/pitch/slides/next-step" },
];

const appendixItems = [
  { title: "Why This Why Now", showInCompact: false, url: "/pitch/slides/whynow" },
  { title: "Business Model", showInCompact: false, url: "/pitch/slides/business" }
];

export const PitchDesk: React.FC = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [selectedSlide, setSelectedSlide] = useState("/pitch/slides/problem");
  const sidebarRef = useRef(null);

  // Check for first visit using localStorage
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('pitchDeckFirstVisit');
    if (hasVisitedBefore) {
      setIsFirstVisit(false);
    }
  }, []);

  const userFormSubmitHandle = (userData: { name: string, username: string }) => {
    // Handle user form submission
    console.log('User data submitted:', userData);
    
    // Mark that the user has visited
    localStorage.setItem('pitchDeckFirstVisit', 'true');
    setIsFirstVisit(false);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const allNavigationItems = useMemo(() => {
    return [
      { title: "Intro Slide", url: "/pitch/slides/intro", showInCompact: false },
      ...mainNavigationItems,
      ...appendixItems
    ];
  }, []);

  const handleSlideClick = (url: string) => {
    setSelectedSlide(url);
  };

  const handleNavigation = (direction: string) => {
    const currentIndex = allNavigationItems.findIndex(item => item.url === selectedSlide);
    if (direction === 'next' && currentIndex < allNavigationItems.length - 1) {
      setSelectedSlide(allNavigationItems[currentIndex + 1].url);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedSlide(allNavigationItems[currentIndex - 1].url);
    }
  };

  const visibleMainItems = isCompact 
    ? mainNavigationItems.filter(item => item.showInCompact)
    : mainNavigationItems;

  const visibleAppendixItems = isCompact
    ? appendixItems.filter(item => item.showInCompact)
    : appendixItems;

  const sidebarWidth = "20%";
  const showAppendixSection = visibleAppendixItems.length > 0;

  return (
    <div className="flex h-screen  w-full">
      <UserModal 
        isOpen={isFirstVisit}
        onSubmit={userFormSubmitHandle}
        onClose={() => setIsFirstVisit(false)}
        
      />

      <div className="relative w-full" style={{ width: sidebarWidth, flexShrink: 0 }}>
        {!isOpen && (
          <Button
            variant="ghost"
            className="fixed top-4 left-4 z-50 p-2"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
        )}
        
        <div
          ref={sidebarRef}
          style={{ width: sidebarWidth }}
          className={`
            fixed top-0 left-0 h-full bg-white
            transition-transform duration-300 ease-in-out 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            flex flex-col shadow-lg
          `}
        >
          <Button
            variant="ghost"
            className="p-2 justify-end"
            onClick={toggleSidebar}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex flex-col p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3 gap-1">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0"
                  style={{
                    backgroundImage: "url('https://enligencestorage.blob.core.windows.net/assets/logos/enligence_logo_hc_white_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <h1 className="font-bold text-lg">Enligence Pitch Deck</h1>
              </div>
            </div> 
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-semibold text-gray-500">Compact View</span>
              <Switch
                checked={isCompact}
                onCheckedChange={setIsCompact}
                className="relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200"
              >
                <span
                  className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                    isCompact ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </Switch>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto mx-2">
            {/* Intro Slide - Always visible */}
            <div
              onClick={() => handleSlideClick("/pitch/slides/intro")}
              className={`
                w-full p-3 text-gray-600 flex items-center justify-between text-base cursor-pointer
                transition-colors 
                ${selectedSlide === "/pitch/slides/intro" ? 'pl-4 bg-blue-200 rounded-sm text-blue-600 border border-blue-100' : ''}
              `}
            >
              <span className="truncate">Intro Slide</span>
            </div>
            
            {/* Main Navigation Items */}
            {visibleMainItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSlideClick(item.url)}
                className={`
                  w-full p-3 text-gray-600 flex items-center justify-between text-base cursor-pointer
                  transition-colors 
                  ${selectedSlide === item.url ? 'pl-4 bg-blue-200 rounded-lg text-blue-600 border border-blue-100' : ''}
                `}
              >
                <span className="truncate">{item.title}</span>
              </div>
            ))}

            {showAppendixSection && (
              <div className="w-full p-3 text-gray-500 font-semibold text-base mt-4">
                Appendix
              </div>
            )}

            {visibleAppendixItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSlideClick(item.url)}
                className={`
                  w-full p-3 text-gray-600 flex items-center justify-between text-base cursor-pointer
                  transition-colors 
                  ${selectedSlide === item.url ? 'pl-4 bg-blue-200 rounded-lg text-blue-600 border border-blue-100' : ''}
                `}
              >
                <span className="truncate">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className="flex-1 w-full mx-auto h-full"
        style={{ 
          marginLeft: isOpen ? '0' : `-${sidebarWidth}`,
          transition: 'margin-left 300ms ease-in-out'
        }}
      >        
        <div className="relative w-full h-screen w-auto mx-auto">
          <Button
            variant="ghost"
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2"
            onClick={() => handleNavigation('prev')}
            disabled={selectedSlide === "/pitch/slides/intro"}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2"
            onClick={() => handleNavigation('next')}
            disabled={selectedSlide === allNavigationItems[allNavigationItems.length - 1].url}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          {selectedSlide === "/pitch/slides/intro" ? (
  <IntroSlide setSelectedSlide={setSelectedSlide} />
) : (
  <iframe
    src={selectedSlide}
    className="mx-auto w-full h-full border-none"
    title="Slide Content"
  />
)}
        </div>
      </div>
    </div>
  );
};

export default PitchDesk;