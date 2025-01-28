
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../ElementsData/data.json'


const VCDashboard = () => {
  const {timelineData,lineDataKeys,barDataKeys,assumptions}=data.WhereSlide
  return (
    <div className=" w-[97%] mx-auto  ">
      <Card className="bg-gradient-to-br from-blue-50 to-white mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Investment Growth Potential</CardTitle>
          <p className="text-gray-600">SOM: $87M | Target Exit: 5-7 Years</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Valuation & Returns Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Valuation & Return Trajectory</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    {lineDataKeys.map((line, index) => (
      <Line
        key={index}
        yAxisId={index === 0 ? 'left' : 'right'}
        type="monotone"
        dataKey={line.dataKey}
        stroke={line.stroke}
        name={line.name}
        strokeWidth={2}
      />
    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Market Penetration & Revenue */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Market Penetration & Revenue Growth</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={timelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                   {barDataKeys.map((bar, index) => (
      <Bar
        key={index}
        yAxisId={bar.yAxisId}
        dataKey={bar.dataKey}
        fill={bar.stroke}
        name={bar.name}
      />
    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Key Assumptions */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Key Assumptions</CardTitle>
              </CardHeader>
              <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {assumptions.map((assumption, index) => (
    <div key={index} className="space-y-2">
      <p className="font-bold">{assumption.section}</p>
      {assumption.items.map((item, itemIndex) => (
        <p key={itemIndex} className="text-gray-600">• {item}</p>
      ))}
    </div>
  ))}
</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default VCDashboard;