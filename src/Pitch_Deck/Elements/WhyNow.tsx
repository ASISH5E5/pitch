import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, CheckCircle, Target, Shield, Info, ArrowUpRight } from 'lucide-react';
import data from '../ElementsData/data.json';

const WhyNowAnalysis = () => {
  const [activeTab, setActiveTab] = useState('demand');
  
  const iconMapping : { [key: string]: JSX.Element }  = {
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    AlertTriangle: <AlertTriangle className="w-6 h-6" />,
    CheckCircle: <CheckCircle className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Info: <Info className="w-4 h-4 text-gray-400 hover:text-blue-600" />,
    ArrowUpRight: <ArrowUpRight className="w-4 h-4 text-green-600" />
  };

  const StatWithTooltip = ({ 
    icon, 
    title, 
    details, 
    dataPoint, 
    source, 
    cagrValue, 
    cagrPeriod, 
    cagrMarket,
    cagrSource 
  } : any) => {
    const [showMainTooltip, setShowMainTooltip] = useState(false);
    const [showCagrTooltip, setShowCagrTooltip] = useState(false);

    return (
      <div className="p-4 bg-white rounded-lg shadow-sm relative">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          {iconMapping[icon]} 
          <h3 className="font-bold">{title}</h3>
          <div 
            className="ml-auto relative"
            onMouseEnter={() => setShowMainTooltip(true)}
            onMouseLeave={() => setShowMainTooltip(false)}
          >
            {showMainTooltip && (
              <div className="absolute bg-white text-black rounded-lg bottom-full transform -translate-x-1/2 mb-2 z-10 left-1/2">
                <div className="bg-white text-black rounded-lg text-sm rounded-lg p-1 whitespace-nowrap shadow-lg ">
                  <p className="text-4 bg-white text-black rounded-lg">{source}</p>
                </div>
              </div>
            )}
            {iconMapping.Info}
          </div>
        </div>
        <p className="text-gray-600">{details}</p>
        <p className="text-blue-600 font-medium mt-2">{dataPoint}</p>
        <div className="mt-3 p-2 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              {iconMapping.ArrowUpRight}
              <span className="text-green-600 font-bold">{cagrValue} CAGR</span>
              <span className="text-sm text-gray-600 ml-1">({cagrPeriod})</span>
            </div>
            <div 
              className="ml-auto relative"
              onMouseEnter={() => setShowCagrTooltip(true)}
              onMouseLeave={() => setShowCagrTooltip(false)}
            >
              {showCagrTooltip && (
                <div className="absolute bottom-full transform -translate-x-1/2 mb-2 z-10 left-1/2">
                  <div className=" text-sm rounded-lg p-2 whitespace-nowrap shadow-lg ">
                    <p className="text-sm bg-white text-black rounded-lg">{cagrSource}</p>
                  </div>
                </div>
              )}
              {iconMapping.Info}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{cagrMarket}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-4">
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
                  onClick={() => setActiveTab(tab)}
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
                {data.WhyThisSlide.marketIndicators.map((indicator, index) => (
                  <StatWithTooltip
                    key={index}
                    icon={indicator.icon}
                    title={indicator.title}
                    details={indicator.details}
                    dataPoint={indicator.dataPoint}
                    source={indicator.source}
                    cagrValue={indicator.cagr.value}
                    cagrPeriod={indicator.cagr.period}
                    cagrMarket={indicator.cagr.market}
                    cagrSource={indicator.cagr.source}
                  />
                ))}
              </div>
            )}
            {activeTab === 'critical' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.WhyThisSlide.criticalFactors.map((factor, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 text-blue-600 bg-white text-black rounded-lg">
                      {iconMapping[factor.icon]} 
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