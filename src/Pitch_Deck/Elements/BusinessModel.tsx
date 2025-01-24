

import { TrendingUp, Target, Building2, ArrowUpRight, Info } from 'lucide-react';
import data from "../ElementsData/data.json"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const BusinessModel = () => {

  type IconKey = keyof typeof iconMapping;


const {pricingTiers,metrics}=data.BusinessSlide;

  // Define the icon mapping for icons
  const iconMapping = {
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Building2: <Building2 className="w-8 h-8" />,
    ArrowUpRight: <ArrowUpRight className="w-4 h-4 text-green-600" />,
    Info: <Info className="w-4 h-4 text-gray-400 hover:text-blue-600" />
  };

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-2 min-h-[300px]">
        {/* Corporate Section */}
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-r">
          <div className="flex items-center gap-3 mb-6">
            {iconMapping[pricingTiers.corporate.icon as IconKey]}
            <div className='flex-1 justify-end'>
              <h2 className="text-2xl font-bold text-gray-900">{pricingTiers.corporate.title}</h2>
              <div className="text-3xl font-bold text-blue-600 mt-1">{pricingTiers.corporate.price}</div>
            </div>
          </div>
          <div className="space-y-4 ml-12">
            {pricingTiers.corporate.features.map((feature, index) => (
              <div key={index} className="flex items-start text-lg text-gray-700">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-r">
          <div className="flex items-center gap-3 mb-6">
            {iconMapping[pricingTiers.corporate.icon as IconKey]}
            <div className='flex-1 justify-end'>
              <h2 className="text-2xl font-bold text-gray-900">Individual</h2>
              <div className="text-3xl font-bold text-blue-600 mt-1">{pricingTiers.corporate.price}</div>
            </div>
          </div>
          <div className="space-y-4 ml-12">
            {pricingTiers.corporate.features.map((feature, index) => (
              <div key={index} className="flex items-start text-lg text-gray-700">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* Metrics Section */}
      <div className="p-8 bg-white border-t">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Growth Metrics</h3>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="h-64 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics.userGrowth}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  {metrics.lineChartConfig.map((lineConfig, index) => (
                    <Line
                      key={index}
                      type="monotone"
                      dataKey={lineConfig.dataKey}
                      name={lineConfig.name}
                      stroke={lineConfig.stroke}
                      strokeWidth={lineConfig.strokeWidth}
                      dot={lineConfig.dot}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {metrics.keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  {iconMapping[metric.icon as IconKey]} {/* Render icon dynamically */}
                  <span className="font-medium">{metric.title}</span>
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
