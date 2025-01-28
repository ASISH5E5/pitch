import { useState } from 'react';
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card';

import { ResponsiveContainer, Tooltip, FunnelChart, Funnel,  LabelList } from 'recharts';

import data from "../ElementsData/data.json"
import { MarketSegmentKey, MarketSlideData,FunnelDataItem ,CustomTooltipProps} from '../Interfaces/Interfaces';
import MarketAnalysis from './SupplementarySlide';




const MarketSlide = () => {
  const [activeSegment, setActiveSegment] = useState<MarketSegmentKey>('tam');
const {marketData,assumptions,icpPoints,ldPoints} :MarketSlideData=data.MarketSlide
const [supplementary,setSupplementary]=useState(false);


if (supplementary) {
  return <MarketAnalysis onBack={() => setSupplementary(false)} />;
}

  
  

  const formatValue = (value: number): string => {
    return `$${value}B`;
  };
  const funnelData: FunnelDataItem[] = [
    { name: 'TAM', value: marketData.tam.total, fill: '#0088FE'},
    { name: 'SAM', value: marketData.sam.total, fill: '#00C49F'},
       { name: 'SOM', value: marketData.som.total, fill: '#FFBB28' } // Increased value and width

  ];

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const segmentKey = payload[0].payload.name.toLowerCase() as MarketSegmentKey;
      const data = marketData[segmentKey];
      
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-bold">{payload[0].payload.name}</p>
          <p className="text-gray-600">{formatValue(payload[0].payload.value)}</p>
          {data.breakdown.map((item, index) => (
            <div key={index} className="mt-2">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full   mx-auto p-4 space-y-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Market Size Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 relative">
              <div className="absolute left-0 top-8 bottom-8 flex flex-col justify-between z-10">
                <div className="flex items-center">
                  <div className="mr-2 mt-24  mb-12 bg-blue-100 rounded-lg p-2 text-sm font-medium whitespace-nowrap">
                    TAM → SAM: 11.7%
                  </div>
                  <div className="mt-12 h-24 w-0.5 bg-gray-300"></div>
                </div>
                <div className="flex items-center ml-12">
                  <div className="mr-3.5 mt- mb-12 bg-blue-100 rounded-lg p-2 text-sm font-medium whitespace-nowrap">
                    SAM → SOM: 5.6%
                  </div>
                  <div className=" mb-12 h-24 w-0.5 bg-gray-300"></div>
                </div>
              </div>
              <div className="h-96 pl-36">
                <ResponsiveContainer width="100%" height="100%">
                  <FunnelChart>
                    <Tooltip content={<CustomTooltip />} />
                    <Funnel
          data={funnelData}
          dataKey="value"
          nameKey="name"
          isAnimationActive
        >
                      <LabelList
                        position="right"
                        fill="#000"
                        stroke="none"
                        dataKey="name"
                        formatter={(value: string) => {
                          const item = funnelData.find(d => d.name === value);
                          return item ? `${value}: ${formatValue(item.value)}` : value;
                        }}
                        fontSize={14}
                        offset={24}
                      />
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex-1">
              <div className="space-y-6">
                <div className="flex gap-4">
                  {Object.entries(marketData).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSegment(key as MarketSegmentKey)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        activeSegment === key
                          ? 'bg-blue-600 text-white'
                          : key === 'som'
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 animate-pulse'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {key.toUpperCase()}: {formatValue(data.total)}
                    </button>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold mb-2">Key Assumptions:</h3>
                  <ul className="space-y-2">
                    {assumptions[activeSegment].map((assumption, index) => (
                      <li key={index} className="text-gray-600">
                        • {assumption}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-4 text-center">Ideal Customer Profile (ICP)</h3>
            <div className="flex justify-center gap-8">
              <div className="flex-1 max-w-sm">
                <div className="bg-white rounded-lg p-4 h-full">
                  <h4 className="font-semibold text-blue-700 text-center mb-3">Company Profile</h4>
                  <ul className="text-sm text-blue-600 space-y-2">
                    {icpPoints.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>

                </div>
              </div>
              <div className="flex-1 max-w-sm">
                <div className="bg-white rounded-lg p-4 h-full">
                  <h4 className="font-semibold text-blue-700 text-center mb-3">Key Characteristics</h4>
                  <ul className="text-sm text-blue-600 space-y-2">
                    {ldPoints.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
        <button
          onClick={() => setSupplementary(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          View Supplementary Market Data
        </button>
      </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketSlide;