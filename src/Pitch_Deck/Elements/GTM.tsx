import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MarketingStrategy, MetricsStrategy, PhasesStrategy, SimpleStrategy, Strategies } from '../Interfaces/Interfaces';
import data from '../ElementsData/data.json';
import { Target,User,Megaphone,Calendar,ChartBar } from 'lucide-react';
// Define proper types for different strategy sections

const GTMStrategy = () => {
  const gtmStrategies: Strategies = data.GTMStrategy;
  const iconMap: { [key: string]: JSX.Element } = {
    Target: <Target />,
    Users: <User />,
    Megaphone: <Megaphone />,
    Calendar: <Calendar />,
    BarChart2: <ChartBar />,
  };

  const renderSection = (strategy: Strategies[keyof Strategies], key: keyof Strategies) => {
    if (key === 'marketing') {
      const marketingStrategy = strategy as MarketingStrategy;
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-blue-600">Corporate</h3>
            <ul className="space-y-2 mt-2">
              {marketingStrategy.corporate.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-blue-600">Individual</h3>
            <ul className="space-y-2 mt-2">
              {marketingStrategy.individual.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (key === 'phases') {
      const phasesStrategy = strategy as PhasesStrategy;
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-blue-600">{phasesStrategy.phase1.title}</h3>
            <ul className="space-y-2 mt-2">
              {phasesStrategy.phase1.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-blue-600">{phasesStrategy.phase2.title}</h3>
            <ul className="space-y-2 mt-2">
              {phasesStrategy.phase2.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (key === 'metrics') {
      const metricsStrategy = strategy as MetricsStrategy;
      return (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-blue-600">Enterprise</h3>
            <ul className="space-y-2 mt-2">
              {metricsStrategy.enterprise.map((metric, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-blue-600">Individual</h3>
            <ul className="space-y-2 mt-2">
              {metricsStrategy.individual.map((metric, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    const simpleStrategy = strategy as SimpleStrategy;
    return (
      <ul className="space-y-2">
        {simpleStrategy.points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full  mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Go-To-Market Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {(Object.entries(gtmStrategies) as [keyof Strategies, Strategies[keyof Strategies]][]).map(([key, strategy]) => (
              <div key={key} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                <div className="text-blue-600 text-2xl">{iconMap[strategy.icon]}</div>
                                  <h2 className="text-xl font-semibold">{strategy.title}</h2>
                </div>
                {renderSection(strategy, key)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GTMStrategy;
