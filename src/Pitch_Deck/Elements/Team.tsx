import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Building2, GraduationCap } from 'lucide-react';
import data from "../ElementsData/data.json";
import { TeamSlideData, CarouselProps, FounderProfileProps } from '../Interfaces/Interfaces';
import Founders from './Founders';

const TeamSlide = () => {
  const [showFounders, setShowFounders] = useState(false);
  const [educationIndex, setEducationIndex] = useState<number>(0);
  const [companyIndex, setCompanyIndex] = useState<number>(0);
  const { founders, educationalInstitutions, companies }: TeamSlideData = data.TeamSlide as TeamSlideData;

  useEffect(() => {
    const timer = setInterval(() => {
      setEducationIndex((prev) => (prev + 1) % educationalInstitutions.length);
      setCompanyIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [educationalInstitutions.length, companies.length]);

  const Carousel = ({ items, currentIndex, setIndex, icon, title }: CarouselProps) => (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="relative">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-4 items-center">
            {[-1, 0, 1].map((offset) => {
              const idx = (currentIndex + offset + items.length) % items.length;
              return (
                <div
                  key={offset}
                  className={`transition-all duration-300 ${
                    offset === 0 ? 'scale-110 opacity-100' : 'scale-90 opacity-60'
                  }`}
                >
                  <img
                    src={items[idx].logo}
                    alt={items[idx].name}
                    className="w-24 h-16 object-contain"
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const FounderProfile = ({ data, align }: FounderProfileProps) => (
    <div className={`p-6 bg-white rounded-lg shadow-sm h-full ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-center gap-4 mb-4 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        <img
          src={data.image}
          alt={data.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg text-blue-600">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.title}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">{data.tagline}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto p-4">
      {showFounders ? (
        <Founders onBack={() => setShowFounders(false)} />
      ) : (
        <Card className="bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">The Team Behind Enligence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FounderProfile data={founders.left} align="left" />
                <FounderProfile data={founders.right} align="right" />
              </div>
              <Carousel
                items={educationalInstitutions}
                currentIndex={educationIndex}
                setIndex={setEducationIndex}
                icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
                title="Educational Background"
              />
              <Carousel
                items={companies}
                currentIndex={companyIndex}
                setIndex={setCompanyIndex}
                icon={<Building2 className="w-6 h-6 text-blue-600" />}
                title="Professional Experience"
              />
              <div className="flex justify-center mt-6">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  onClick={() => setShowFounders(true)}
                >
                  Explore Founders Journey
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeamSlide;
