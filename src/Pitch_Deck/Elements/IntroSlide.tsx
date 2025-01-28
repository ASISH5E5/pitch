import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiNavigationLine } from "react-icons/ri";
import GPSAnalogy from "./GPSAnalogy";

interface IntroSlideProps {
  setSelectedSlide: (slide: string) => void;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ setSelectedSlide }) => {
  const [showAnalogy, setShowAnalogy] = useState(false);

  if (showAnalogy) {
    return <GPSAnalogy onBack={() => setShowAnalogy(false)} />;
  }

  return (
    <div className="w-full min-w-full h-full mx-auto flex items-center justify-center">
      <div className="w-full space-y-12 text-center">
        {/* Logo and Company Name */}
        <div className="space-y-2">
          <div className="flex items-center justify-center mb-4">
            <RiNavigationLine className="w-16 h-16 text-blue-600 transform -rotate-5" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900">ENLIGENCE</h1>
        </div>
        {/* Tagline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-gray-600">
            Like GPS is to Physical Navigation, Enligence is for Skill Navigation
          </h2>
        </div>
        {/* CTAs */}
        <div className="flex flex-col items-center gap-4">
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg"
            onClick={() => setSelectedSlide("/pitch/slides/problem")}
          >
            Explore The Problem
          </Button>
          <Button
            variant="outline"
            className="bg-blue-50 text-blue-600 hover:bg-blue-100"
            onClick={() => setShowAnalogy(true)}
          >
            Explore the GPS Analogy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
