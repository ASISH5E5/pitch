import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import data from '../Elements'


const VCActionSubmission = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Dynamically load Calendly script
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

  const options = [
    {
      title: "Schedule a Call",
      description: "Let's discuss your vision in detail",
      action: "schedule",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Request More Information",
      description: "Get detailed financials and projections",
      action: "info",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Share Feedback",
      description: "Provide constructive feedback on the pitch",
      action: "feedback",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      title: "Pass for Now",
      description: "Not a fit for current investment thesis",
      action: "pass",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const handleAction = (action: string | React.SetStateAction<null>) => {
    setSelectedAction(action);
    setFormData({});
    setSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
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
    } catch (error) {
      alert("Error submitting data: " + error.message);
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
              onClick={handleSubmit} 
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
                  onClick={() => handleAction(option.action)}
                  className={`p-3 rounded-lg transition-all hover:scale-102 ${
                    selectedAction === option.action
                      ? 'bg-blue-100 border border-blue-500 shadow-sm'
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
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