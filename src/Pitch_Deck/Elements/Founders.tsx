
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Building2, Heart, Target } from 'lucide-react';
import { FaArrowLeft } from 'react-icons/fa6';
const Founders = ({ onBack }: { onBack: () => void }) => {
  const story = [
    {
      title: "From Vision to Reality",
      content: "Born from a 3-year journey of solving complex AI challenges, evolving from a passionate side project into a full-fledged enterprise solution",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Innovation Meets Experience",
      content: "Combining deep AI product expertise with over a decade of global SaaS sales success across diverse markets",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Proven Foundation",
      content: "Two years of dedicated development alongside our careers has resulted in a robust MVP, validated through real-world testing",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Strategic Growth Plan",
      content: "Positioned for rapid scaling with a clear roadmap for user acquisition and market expansion",
      icon: <Target className="w-6 h-6" />
    }
  ];
  return (
    <div className="w-full min-h-screen bg-white p-8">
         <Button variant="ghost" className="mb-8 text-blue-600" onClick={onBack}>
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
    <div className="w-full  mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {story.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold">Ready for Next Phase: </span>
                With our MVP and complementary expertise in AI development and global SaaS sales, we're now ready to transition to full-time commitment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};
export default Founders;