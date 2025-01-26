import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import data from '../ElementsData/data.json';

type SelectedAction = 'schedule' | 'info' | 'feedback' | 'pass' | null;

interface Option {
  action: SelectedAction; // Ensure action is one of 'schedule', 'info', 'feedback', 'pass', or null
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FormData {
  [key: string]: string;
}

const VCActionSubmission: React.FC = () => {
  const { options } = data.NextSlide as { options: Option[] };
    const [selectedAction, setSelectedAction] = useState<SelectedAction>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (selectedAction === 'schedule') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [selectedAction]);

  const handleAction = (action: SelectedAction) => {
    setSelectedAction(action);
    setFormData({});
    setSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/cab78403-b139-4965-8b7a-beb7e3cdd581",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: selectedAction,
            ...formData
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit data.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Error submitting data: " + error.message);
      } else {
        alert("Error submitting data: An unknown error occurred");
      }
    }
  };

  const renderActionForm = () => {
    if (submitted) {
      return (
        <Alert className="mt-4 bg-blue-50">
          <AlertDescription className="text-center">
            <p className="font-semibold mb-2">Thank you for your response</p>
            <p className="text-sm">We have recorded your feedback and will take appropriate action.</p>
          </AlertDescription>
        </Alert>
      );
    }

    switch (selectedAction) {
      case 'schedule':
        return (
          <div className="space-y-3">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/enligence/30min" 
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
            <Button 
              onClick={(e) => handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)} 
              className="w-full bg-black text-white hover:bg-black"
            >
              Confirm Schedule
            </Button>
          </div>
        );
      case 'info':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Information Needed</label>
              <Textarea
                name="infoRequest"
                placeholder="Specify the information you'd like to receive"
                className="w-full"
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black">
              Request Information
            </Button>
          </form>
        );
      case 'feedback':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Overall Impression</label>
              <Textarea
                name="overallImpression"
                placeholder="Share your thoughts on the pitch"
                className="w-full"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Areas for Improvement</label>
              <Textarea
                name="areasOfImprovement"
                placeholder="What could be enhanced?"
                className="w-full"
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black">
              Submit Feedback
            </Button>
          </form>
        );
      case 'pass':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Reason (Optional)</label>
              <Textarea
                name="reason"
                placeholder="Help us understand why this isn't a fit"
                className="w-full"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Would you like to stay updated on our progress?
              </label>
              <select
                name="stayUpdated"
                className="w-full border rounded-md p-2"
                onChange={handleInputChange}
              >
                <option value="no">No, thank you</option>
                <option value="quarterly">Yes, quarterly updates</option>
                <option value="major">Yes, major milestones only</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black">
              Submit Response
            </Button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardContent className="p-8">
          <div className="min-h-80">
            <h2 className="text-xl font-bold mb-4 text-center">How Would You Like to Proceed?</h2>
            <div className="grid grid-cols-4 gap-4">
              {options.map((option) => (
                <button
                  key={option.action}
                  onClick={() => handleAction(option.action)} // Now TypeScript knows it's a SelectedAction
                  className={`p-3 rounded-lg transition-all hover:scale-102 ${selectedAction === option.action
                    ? 'bg-blue-100 border border-blue-500 shadow-sm'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="text-blue-600">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{option.title}</h3>
                      <p className="text-gray-600 text-xs leading-tight">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {selectedAction && (
              <div className="mt-6 bg-white p-6 rounded-lg border-2 border-gray-200">
                {renderActionForm()}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VCActionSubmission;
