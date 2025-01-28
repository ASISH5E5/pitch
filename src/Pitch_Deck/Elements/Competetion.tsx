import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { LMSDashboardData } from '../Interfaces/Interfaces';
import data from '../ElementsData/data.json';

// Destructure LMSDashboardData
const { features, allCompetitors }: LMSDashboardData = data.CompetitionSlide;

// Typing the props for CompetitorList component
interface CompetitorListProps {
  selectedCompanies: string[];
  onCompanySelect: (companyName: string | 'selectAll' | 'clear') => void;
}

// Typing the props for FeatureComparison component
interface FeatureComparisonProps {
  selectedCompanies: string[];
}

const CompetitorList: React.FC<CompetitorListProps> = ({ selectedCompanies, onCompanySelect }) => (
  <Card className="w-full h-full">
    <CardHeader className="p-4 flex flex-row-2  justify-left items-left">
      <CardTitle className="text-lg mb-2">LMS Competitors</CardTitle>
      <div className="flex gap-2">
        <button
          onClick={() => onCompanySelect('selectAll')}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
        >
          Select All
        </button>
        {selectedCompanies.length > 0 && (
          <button
            onClick={() => onCompanySelect('clear')}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          >
            Clear Selection
          </button>
        )}
      </div>
    </CardHeader>
    <CardContent className="p-3">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-2 border">Select</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Region</th>
              <th className="p-2 border text-center">Founded</th>
              <th className="p-2 border text-center">Funding</th>
              <th className="p-2 border">Strengths</th>
              <th className="p-2 border">Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            {allCompetitors.map((company, idx) => (
              <tr
                key={company.name}
                className={`${
                  selectedCompanies.includes(company.name)
                    ? 'bg-blue-50 hover:bg-blue-100'
                    : idx % 2 === 0
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-slate-50 hover:bg-gray-50'
                }`}
              >
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company.name)}
                    onChange={() => onCompanySelect(company.name)}
                    className="h-4 w-4"
                  />
                </td>
                <td className="p-2 border font-medium">{company.name}</td>
                <td className="p-2 border">{company.type}</td>
                <td className="p-2 border">{company.region}</td>
                <td className="p-2 border text-center">{company.founded}</td>
                <td className="p-2 border text-center">{company.funding}</td>
                <td className="p-2 border text-sm text-green-700">{company.strengths}</td>
                <td className="p-2 border text-sm text-red-700">{company.weaknesses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ selectedCompanies }) => {
  let companies = ['Enligence'];
  if (selectedCompanies?.length > 0) {
    companies = [...selectedCompanies, 'Enligence'];
  }

  return (
    <Card className="w-[100%] h-full">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Feature Comparison</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-2 border text-left">Feature</th>
                {companies.map(company => (
                  <th key={company} className={`p-2 border text-center w-20 ${company === 'Enligence' ? 'bg-blue-50' : ''}`}>
                    {company}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(features).map(([feature, support], idx) => (
                <tr key={feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="p-2 border">{feature}</td>
                  {companies.map(company => (
                    <td key={`${feature}-${company}`} className={`p-2 border text-center ${company === 'Enligence' ? 'bg-blue-50' : ''}`}>
                      {support[company] ? (
                        <Check className="w-4 h-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const SWOTAnalysis: React.FC = () => (
  <Card className="w-full h-full">
    <CardHeader className="p-4">
      <CardTitle className="text-lg">SWOT Analysis - Enligence</CardTitle>
    </CardHeader>
    <CardContent className="p-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Strengths</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>AI-powered tools like course and assessment generation</li>
            <li>Focus on L&D teams in tech, finance, and consulting (high demand sectors)</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">Weaknesses</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Competing against established players with larger funding</li>
            <li>Potential lack of extensive pre-built course libraries</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Opportunities</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Growing demand for personalized learning paths and AI solutions</li>
            <li>Expanding in underpenetrated geographies (e.g., SMBs in India)</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Threats</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Intense competition from well-funded market leaders</li>
            <li>Rapidly evolving customer expectations in the AI-LMS space</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const LMSDashboard: React.FC = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const handleCompanySelect = (companyName: string | 'selectAll' | 'clear') => {
    if (companyName === 'clear') {
      setSelectedCompanies([]);
      return;
    }
    if (companyName === 'selectAll') {
      setSelectedCompanies(allCompetitors.map(comp => comp.name));
      return;
    }
    setSelectedCompanies(prev =>
      prev.includes(companyName)
        ? prev.filter(name => name !== companyName)
        : [...prev, companyName]
    );
  };

  return (
    <div className="space-y-6 w-[97%] mx-auto">
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-sm text-blue-800">
          Select companies to compare with Enligence. Currently selected: {selectedCompanies.length > 0 ? selectedCompanies.join(', ') : 'None'}
        </p>
      </div>
      <CompetitorList
        selectedCompanies={selectedCompanies}
        onCompanySelect={handleCompanySelect}
      />
      <FeatureComparison selectedCompanies={selectedCompanies} />
      <SWOTAnalysis />
    </div>
  );
};

export default LMSDashboard;
