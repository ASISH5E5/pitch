import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { TrendingUp, AlertTriangle, DollarSign, BookOpen, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa6';

interface MarketAnalysisProps {
  onBack: () => void;
}

const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ onBack }) => {
  const categories = {
    skill_gap: {
      title: "Growing Skill Gap Problem",
      icon: <AlertTriangle className="w-6 h-6" />,
      stats: [
        { label: "Workers' skills disruption by 2028", value: "44%", source: "WEF Report (2023)" },
        { label: "Companies reporting skill gaps", value: "87%", source: "McKinsey" },
        { label: "Workforce needing new skills", value: "58%", source: "Gartner" }
      ]
    },
    lms_market: {
      title: "LMS Market & Ineffectiveness",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: [
        { label: "LMS Market Size (2023)", value: "$18.8B", source: "Market Research" },
        { label: "Traditional LMS completion rates", value: "20-30%", source: "Industry Average" },
        { label: "L&D programs with measurable outcomes", value: "25%", source: "Corporate Studies" }
      ]
    },
    ld_budgets: {
      title: "Corporate L&D Budgets",
      icon: <DollarSign className="w-6 h-6" />,
      stats: [
        { label: "Per employee training budget", value: "$1,280", source: "Industry Average" },
        { label: "Large company training spend", value: "$17.5M", source: "Corporate Reports" },
        { label: "Custom content cost per hour", value: "$10K-35K", source: "Market Analysis" }
      ]
    },
    continuous_learning: {
      title: "Continuous Learning Focus",
      icon: <BookOpen className="w-6 h-6" />,
      stats: [
        { label: "Employees valuing learning opportunities", value: "94%", source: "LinkedIn" },
        { label: "Executives prioritizing learning", value: "84%", source: "Deloitte" },
        { label: "L&D pros favoring personalization", value: "77%", source: "Industry Survey" }
      ]
    },
    hiring: {
      title: "Data-Driven Hiring",
      icon: <Users className="w-6 h-6" />,
      stats: [
        { label: "Bad hire cost (% of salary)", value: "30%", source: "HR Studies" },
        { label: "Companies making wrong hires", value: "74%", source: "Recruitment Data" },
        { label: "Assessment tools market CAGR", value: "15%", source: "Market Analysis" }
      ]
    },
    efficiency: {
      title: "Platform Efficiency",
      icon: <Clock className="w-6 h-6" />,
      stats: [
        { label: "Traditional course creation time", value: "40-100 hrs", source: "Industry Standard" },
        { label: "Platform course creation time", value: "Minutes", source: "Our Solution" },
        { label: "Implementation time saved", value: "80-90%", source: "Comparative Analysis" }
      ]
    }
  };

  const StatCard = ({ label, value, source }: { label: string, value: string, source: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div className="bg-gray-50 rounded-lg p-3 relative">
        <div className="text-xl font-bold text-blue-600">{value}</div>
        <div className="text-sm text-gray-600 pr-6">{label}</div>
        <div
          className="relative top-2 right-2 cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Info className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          {showTooltip && (
            <div className="absolute z-50 right-0 transform translate-x-2 bg-gray-800 text-white text-xs rounded px-2 py-1 min-w-max">
              Source: {source}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-4">
      <Button 
        variant="ghost" 
        className="mb-8 text-blue-600" 
        onClick={onBack}  // Use the onBack prop directly
      >
        <FaArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Market Data & Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center w-full gap-2 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-bold">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {category.stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      label={stat.label}
                      value={stat.value}
                      source={stat.source}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketAnalysis;