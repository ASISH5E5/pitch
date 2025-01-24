import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftCircle, ArrowRightCircle, Target, User, Rocket, Briefcase, TrendingUp, DollarSign } from 'lucide-react';

// Import JSON data
import data from '../ElementsData/data.json';
import { TractionSlideData } from '../Interfaces/Interfaces';

// Map JSON icon strings to React components
const iconMap: { [key: string]: JSX.Element } = {
  Users: <User />,
  Target: <Target />,
  Rocket: <Rocket />,
  Briefcase: <Briefcase />,
  TrendingUp: <TrendingUp />,
  DollarSign: <DollarSign />,
};

// Transform JSON data to match the expected interface
const transformedData: TractionSlideData = {
  ...data.TractionSlide,
  metrics: data.TractionSlide[' metrics'].map((metric: any) => ({
    ...metric,
    icon: iconMap[metric.icon.trim()],
  })),
  financialMetrics: data.TractionSlide.financialMetrics.map((metric: any) => ({
    ...metric,
    icon: iconMap[metric.icon.trim()],
  })),
  ITEMS_PER_SLIDE: 0
};

const TractionSlide = () => {
  const [animate, setAnimate] = useState(false);
  const [showUSD, setShowUSD] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use transformed data
  const { metrics, financialMetrics, journeySteps, clients } = transformedData;
  const ITEMS_PER_SLIDE = 4;
  const totalSlides = Math.ceil(clients.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full  mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
              Current Traction <span className="text-sm font-normal text-gray-600 ml-2">Past 2 years</span>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-500 transform ${
                    animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-2 justify-center">
                    {metric.icon}
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1 text-center">{metric.value}</div>
                  {metric.subtext && <div className="text-sm text-gray-600 text-center">{metric.subtext}</div>}
                </div>
              ))}
            </div>
            {/* Financial Metrics */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-50 rounded-lg p-1 inline-flex">
                <button
                  onClick={() => setShowUSD(true)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    showUSD ? 'bg-white shadow-sm text-blue-600' : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  Show in USD
                </button>
                <button
                  onClick={() => setShowUSD(false)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    !showUSD ? 'bg-white shadow-sm text-blue-600' : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  Show in INR
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {financialMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-500 transform ${
                    animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-2 justify-center">
                    {metric.icon}
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1 text-center">
                    {showUSD ? metric.valueUSD : metric.valueINR}
                  </div>
                  {metric.subtext && <div className="text-sm text-gray-600 text-center">{metric.subtext}</div>}
                </div>
              ))}
            </div>
            {/* Client Logo Carousel */}
            <div
              className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-500 transform ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-bold mb-4 text-center">Current Clients</h3>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <button onClick={prevSlide} className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <ArrowLeftCircle className="w-6 h-6" />
                  </button>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-center gap-6">
                      {clients
                        .slice(currentSlide * ITEMS_PER_SLIDE, (currentSlide + 1) * ITEMS_PER_SLIDE)
                        .map((client, index) => (
                          <div key={index} className="transition-all duration-300">
                            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-24 h-16">
                              <img src={client.logo} alt={client.name} className="max-w-full h-auto" />
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-2">{client.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <button onClick={nextSlide} className="p-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <ArrowRightCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            {/* Journey Timeline */}
            <div
              className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-500 transform ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <h3 className="font-bold mb-6 text-center text-lg">Journey Summary</h3>
              <div className="space-y-6">
                {journeySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${step.active ? 'bg-blue-500' : 'bg-blue-200'}`} />
                      <div className="flex-1">
                        <h4 className={`font-semibold ${step.active ? 'text-blue-600' : 'text-gray-700'}`}>
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                        {step.details && <p className="text-sm text-gray-500 mt-1">{step.details}</p>}
                        {step.highlight && <p className="text-sm text-blue-600 font-medium mt-1">{step.highlight}</p>}
                      </div>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="absolute left-1.5 top-4 w-px h-12 bg-blue-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TractionSlide;
