import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Building2, Code, Laptop, Megaphone, Target, Users } from 'lucide-react';
import data from '../ElementsData/data.json'; // JSON data import
import { AllocationData, Milestones } from '../Interfaces/Interfaces'; // Import interfaces

const FundraisingAsk = () => {
  // Map JSON icon strings to JSX elements
  const iconMap: { [key: string]: JSX.Element } = {
    Code: <Code className="w-4 h-4" />,
    Laptop: <Laptop className="w-4 h-4" />,
    Megaphone: <Megaphone className="w-4 h-4" />,
    Users: <Users className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    Target: <Target className="w-4 h-4" />,
  };

  // Transform JSON data
  const allocationData: AllocationData[] = data.OurSlide.allocationData.map((item: any) => ({
    ...item,
    icon: iconMap[item.icon.trim()], // Map icon strings to JSX elements
  }));

  const milestones: Milestones = {
    ...data.OurSlide.milestones,
    targets: data.OurSlide.milestones.targets.map((target: any) => ({
      ...target,
      icon: iconMap[target.icon.trim()], // Map icon strings to JSX elements
    })),
  };

  const COLORS: string[] = data.OurSlide.COLORS;

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      const { icon, name, value, details } = payload[0].payload;
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-bold flex items-center gap-2">
            {icon}
            {name}
          </p>
          <p className="text-gray-600">${value}K</p>
          <ul className="mt-2">
            {details.map((detail: string, idx: number) => (
              <li key={idx} className="text-sm text-gray-500">• {detail}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full  mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Fundraising Ask: $881K Pre-seed (15-20% Equity)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            {/* Fund Allocation Chart */}
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884D8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}K`}
                  >
                    {allocationData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Key Milestones Section */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-blue-600">Key Milestones</h3>
              <p className="text-gray-600 font-medium">{milestones.timeline}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {milestones.targets.map((target, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      {target.icon}
                      <span className="font-bold">{target.metric}</span>
                    </div>
                    <p className="text-gray-600">{target.target}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 mb-4">Next Round Target</h4>
                <p className="text-gray-800">{milestones.nextRound.amount}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundraisingAsk;
