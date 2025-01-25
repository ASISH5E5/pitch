import { Button } from "@/components/ui/button";
import { Brain, Globe, Rocket } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import data from "../ElementsData/data.json";

type IconKey = keyof typeof iconMapping;
const iconMapping = {
  FiGlobe: <Globe className="w-12 h-12 text-blue-600" />,
  TbBrain: <Brain className="w-14 h-14 text-blue-600" />,
  PiRocketLaunchBold: <Rocket className="w-14 h-14 text-blue-600" />,
};

const GPSAnalogy = ({ onBack }: { onBack: () => void }) => {
  const { comparisons, example } = data.GPSSlide;

  return (
    <div className="w-full min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        <Button variant="ghost" className="mb-8 text-blue-600" onClick={onBack}>
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">The GPS Analogy</h2>
          </div>
          <div className="grid gap-8 mt-12">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div className="flex justify-center">
                    {iconMapping[comparison.icon as IconKey]}
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded p-3">
                        <span className="font-semibold text-blue-600">GPS:</span>
                        <br />
                        {comparison.gps}
                      </div>
                      <div className="bg-white rounded p-3">
                        <span className="font-semibold text-blue-600">Enligence:</span>
                        <br />
                        {comparison.enligence}
                      </div>
                    </div>
                    <p className="text-gray-600">{comparison.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{example.title}</h3>
            <p className="text-lg text-gray-700">{example.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSAnalogy;
