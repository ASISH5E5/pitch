import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card';

import { Users, Info } from 'lucide-react';

 import data from '../ElementsData/data.json'
import { ProblemSlideData } from '../Interfaces/Interfaces';



const ProblemSlide = () => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const { keyStats }: ProblemSlideData = data.ProblemSlide;

  

  const handleInfoClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-[99%]  mx-auto my-auto h-full p-2 mt-4">
      <Card className="shadow-sm">
        <CardHeader className="text-center pb-4 pt-4 bg-blue-50">
          <CardTitle className="text-xl font-semibold text-gray-600 mb-2">The Problem</CardTitle>
          <p className="text-gray-900 text-lg px-8 font-medium leading-relaxed">
            With 1 billion people needing reskilling by 2030 and 58% of workers requiring new skills now, companies face two critical challenges: Effectively identifying required skills (only 10% have proper frameworks), and creating learning content is expensive ($1000+/hour) and slow (40-100 hours), often becoming obsolete upon deployment.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-white p-4 rounded-lg">
            <ul className="space-y-3">
              {keyStats.map((stat: { text: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; link: string; source: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, idx: Key | null | undefined) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="min-w-3 mt-1">•</div>
                  <div className="flex-1 text-base">{stat.text}</div>
                  <div className="relative">
                    <button
                      className="mt-0.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                      onClick={() => handleInfoClick(stat.link)}
                      onMouseEnter={() => setActiveSource(`stat-${idx}`)}
                      onMouseLeave={() => setActiveSource(null)}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    {activeSource === `stat-${idx}` && (
                      <div className="absolute bg-white shadow-lg rounded-lg p-2 z-10 max-w-xs mt-2 right-0">
                        <p className="text-xs text-gray-600 whitespace-nowrap">{stat.source}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Bottom Summary */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex items-center gap-2 p-3">
              <Users className="w-4 h-4 text-blue-600" />
              <div className="text-gray-700 flex items-center gap-2 text-sm">
                <span className="font-bold">94% of employees</span> would stay longer at a company that invests in personalized learning
                <div className="relative">
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    onClick={() => handleInfoClick("https://learning.linkedin.com/resources/workplace-learning-report-2018?src=li-scin&veh=7010d000001BicLAASv2&cid=7010d000001BicLAAS&bf=1")}
                    onMouseEnter={() => setActiveSource('bottom-stat')}
                    onMouseLeave={() => setActiveSource(null)}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  {activeSource === 'bottom-stat' && (
                    <div className="absolute bg-white shadow-lg rounded-lg p-2 z-10 max-w-xs mt-2 right-0">
                      <p className="text-xs text-gray-600 whitespace-nowrap">LinkedIn Workplace Learning Report 2018</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemSlide;