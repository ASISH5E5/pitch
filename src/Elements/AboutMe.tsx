import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import i1 from '../Images/My_Image-removebg-preview.png'

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-16">
      <Card className="h-screen w-full ">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 p-8 m-8">
            {/* Left Column - Image */}
            <div className="flex flex-col h-full w-full items-center justify-center">
              <div className="relative w-3/4   rounded-lg overflow-hidden ">
                <img 
                  src={i1}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">About Me</h1>
                <h2 className="text-xl text-blue-600 font-semibold mb-4">
                  Professional Web Developer with 10 Years of Experience
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate web developer specializing in creating modern, responsive, 
                  and user-friendly applications. With a decade of experience in full-stack development,
                  I've helped numerous businesses transform their digital presence through innovative solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>El Centro, CA</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>32 Years Old</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+1-202-555-0138</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>henrysmith@gmail.com</span>
                </div>
              </div>

              <Button className="mt-6 bg-blue-500 hover:bg-blue-600">
                Download Resume
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;