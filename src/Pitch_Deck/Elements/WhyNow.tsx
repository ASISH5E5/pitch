import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, CheckCircle, Target, Shield, Info, ArrowUpRight } from 'lucide-react';
import data from '../ElementsData/data.json';

const WhyNowAnalysis = () => {
  const [activeTab, setActiveTab] = useState('demand');
  const [activeMainInfo, setActiveMainInfo] = useState<number | null>(null); // Correct type
  const [activeCagrInfo, setActiveCagrInfo] = useState<number | null>(null); // Correct type
  const { marketIndicators, criticalFactors } = data.WhyThisSlide;

 

  const iconMapping : { [key: string]: JSX.Element }  = {
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    AlertTriangle: <AlertTriangle className="w-6 h-6" />,
    CheckCircle: <CheckCircle className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Info: <Info className="w-4 h-4 text-gray-400 hover:text-blue-600" />,
    ArrowUpRight: <ArrowUpRight className="w-4 h-4 text-green-600" />
  };

  return (
    <div className="w-full  mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Why This, Why Now?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              {['demand', 'critical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveMainInfo(null); // Reset active info
                    setActiveCagrInfo(null); // Reset active CAGR info
                  }}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab === 'demand' ? 'Market Indicators' : 'Critical Success Factors'}
                </button>
              ))}
            </div>
            {activeTab === 'demand' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketIndicators.map((indicator, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm relative">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      {iconMapping[indicator.icon ]} {/* Dynamically render icon */}
                      <h3 className="font-bold">{indicator.title}</h3>
                      <button
                        className="ml-auto"
                        onClick={() => {
                          setActiveMainInfo(activeMainInfo === index ? null : index);
                          setActiveCagrInfo(null); // Reset CAGR info when main info is toggled
                        }}
                      >
                        {iconMapping.Info} {/* Dynamically render info icon */}
                      </button>
                    </div>
                    <p className="text-gray-600">{indicator.details}</p>
                    <p className="text-blue-600 font-medium mt-2">{indicator.dataPoint}</p>
                    <div className="mt-3 p-2 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          {iconMapping.ArrowUpRight} {/* Dynamically render CAGR icon */}
                          <span className="text-green-600 font-bold">{indicator.cagr.value} CAGR</span>
                          <span className="text-sm text-gray-600 ml-1">({indicator.cagr.period})</span>
                        </div>
                        <button
                          className="ml-auto"
                          onClick={() => {
                            setActiveCagrInfo(activeCagrInfo === index ? null : index);
                            setActiveMainInfo(null); // Reset main info when CAGR info is toggled
                          }}
                        >
                          {iconMapping.Info} {/* Dynamically render info icon */}
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{indicator.cagr.market}</p>
                    </div>
                    {activeMainInfo === index && (
                      <div className="absolute top-full left-0 mt-2 p-3 bg-white shadow-lg rounded-lg z-10 w-full">
                        <p className="text-sm text-gray-600">Source: {indicator.source}</p>
                      </div>
                    )}
                    {activeCagrInfo === index && (
                      <div className="absolute top-full left-0 mt-2 p-3 bg-white shadow-lg rounded-lg z-10 w-full">
                        <p className="text-sm text-gray-600">Source: {indicator.cagr.source}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'critical' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {criticalFactors.map((factor, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 text-blue-600">
                      {iconMapping[factor.icon ]} {/* Dynamically render icon */}
                      <span className="font-bold">{factor.factor}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyNowAnalysis;
