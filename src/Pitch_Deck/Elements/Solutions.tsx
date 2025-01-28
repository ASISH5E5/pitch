import { useState } from 'react';
import { ArrowRight, Brain, CheckCircle, Shield, Target, TrendingUp, Users } from 'lucide-react';
import data from '../ElementsData/data.json';
import GPSAnalogy from './GPSAnalogy';
import { SolutionSlideData } from '../Interfaces/Interfaces';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const iconMapping: { [key: string]: JSX.Element } = {
  Users: <Users className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  ArrowRight: <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />,
  Target: <Target className="w-5 h-5" />,
};

const SolutionSlide = () => {
  const { solution,features, impactAreas }: SolutionSlideData = data.SolutionSlide;
  const [showAnalogy, setShowAnalogy] = useState(false); // State for GPSAnalogy visibility

  if (showAnalogy) {
    return <GPSAnalogy onBack={() => setShowAnalogy(false)} />;
  }

  return (
    <div className="w-[100%] mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Solution</CardTitle>
          <p className="text-gray-600 mt-4">
           {solution}
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Center divider with arrows */}
            <div className="absolute top-0 left-1/2 bottom-0 w-px bg-blue-200 -translate-x-1/2 z-0" />
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {/* Left side: Key Features */}
              <div className="space-y-4">
                <h3 className="font-bold text-xl mb-6 text-blue-800">Platform Features</h3>
                <div className="grid grid-cols-1 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative group"
                    >
                      {/* Arrow pointing to impact */}
                      <div className="hidden group-hover:block absolute top-1/2 -right-8 w-8 h-0.5 bg-blue-400" />
                      <div className="hidden group-hover:block absolute top-1/2 -right-8 w-3 h-3 border-t-2 border-r-2 border-blue-400 transform rotate-45 -translate-y-1/2" />
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${feature.color}-50 text-${feature.color}-600 flex-shrink-0`}>
                          {iconMapping[feature.icon]}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{feature.title}</h3>
                          <div className="text-sm text-gray-600">{feature.solution}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right side: Key Impact Areas */}
              <div>
                <h3 className="font-bold text-xl mb-6 text-green-800">Key Impact Areas</h3>
                <div className="grid grid-cols-1 gap-4">
                  {impactAreas.map((impact, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow
                        border-l-4 border-${impact.color}-500 relative group`}
                    >
                      {/* Arrow pointing from features */}
                      <div className="hidden group-hover:block absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-400" />
                      <div className="hidden group-hover:block absolute top-1/2 -left-10 w-3 h-3 border-t-2 border-r-2 border-blue-400 transform rotate-45 -translate-y-1/2" />
                      <div className="flex items-center">
                        <div className={`mr-3 p-2 rounded-full bg-${impact.color}-50 flex-shrink-0`}>
                          {iconMapping[impact.icon]}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-base">{impact.metric}</h4>
                            <span className={`text-${impact.color}-700 font-bold text-sm bg-${impact.color}-50 px-2 py-0.5 rounded-full`}>
                              {impact.improvement}
                            </span>
                          </div>
                          <div className="flex items-center text-sm gap-2">
                            <span className="text-red-500 font-medium">{impact.traditional}</span>
                            {iconMapping.ArrowRight} 
                            <span className="text-green-500 font-medium">{impact.enligence}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* GPS Analogy Button */}
          <div className="mt-12 text-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
              onClick={() => setShowAnalogy(true)}
            >
              {iconMapping.Target}
              Explore the GPS Analogy
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolutionSlide;
