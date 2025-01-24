import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

enum ActionType {
  SCHEDULE = 'schedule',
  INFO = 'info',
  FEEDBACK = 'feedback',
  PASS = 'pass'
}
import data from '../ElementsData/data.json'

const VCActionSubmission = () => {
  const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);
  const {options} =data.NextSlide;
  const [formData, setFormData] = useState({
    scheduleDate: '',
    infoRequest: '',
    overallImpression: '',
    areasOfImprovement: '',
    decision: '',
    reason: '',
    stayUpdated: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const iconMapping: Record<ActionType, JSX.Element> = {
    [ActionType.SCHEDULE]: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    [ActionType.INFO]: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    [ActionType.FEEDBACK]: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    [ActionType.PASS]: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let dataToSubmit = {};

    switch (selectedAction) {
      case ActionType.SCHEDULE:
        dataToSubmit = { scheduleDate: formData.scheduleDate };
        break;
      case ActionType.INFO:
        dataToSubmit = { infoRequest: formData.infoRequest };
        break;
      case ActionType.FEEDBACK:
        dataToSubmit = {
          overallImpression: formData.overallImpression,
          areasOfImprovement: formData.areasOfImprovement
        };
        break;
      case ActionType.PASS:
        dataToSubmit = { 
          decision: formData.decision,
          reason: formData.reason,
          stayUpdated: formData.stayUpdated
        };
        break;
    }

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/cab78403-b139-4965-8b7a-beb7e3cdd581",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      alert("Error submitting data: " + (error as Error).message);
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
      case ActionType.SCHEDULE:
        return (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Select Date</label>
              <input 
                type="date" 
                name="scheduleDate"
                value={formData.scheduleDate}
                onChange={handleInputChange}
                className="w-1/3 border rounded-md p-2"
                required 
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black ">Schedule Call</Button>
          </form>
        );
      case ActionType.INFO:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Information Needed</label>
              <Textarea
                name="infoRequest"
                placeholder="Specify the information you'd like to receive"
                value={formData.infoRequest}
                onChange={handleInputChange}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black ">Request Information</Button>
          </form>
        );
      case ActionType.FEEDBACK:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Overall Impression</label>
              <Textarea
                name="overallImpression"
                placeholder="Share your thoughts on the pitch"
                value={formData.overallImpression}
                onChange={handleInputChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Areas for Improvement</label>
              <Textarea
                name="areasOfImprovement"
                placeholder="What could be enhanced?"
                value={formData.areasOfImprovement}
                onChange={handleInputChange}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black ">Submit Feedback</Button>
          </form>
        );
      case ActionType.PASS:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Decision</label>
              <select
                name="decision"
                value={formData.decision}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Reason (Optional)</label>
              <Textarea
                name="reason"
                placeholder="Help us understand why this isn't a fit"
                value={formData.reason}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stay Updated?</label>
              <select
                name="stayUpdated"
                value={formData.stayUpdated}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              >
                <option value="no">No, thank you</option>
                <option value="quarterly">Yes, quarterly updates</option>
                <option value="major">Yes, major milestones only</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-black ">Submit Response</Button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen mx-auto p-4">
      <Card className="bg-gradient-to-br min-h-72 from-blue-50 to-white">
        <CardContent className="p-8">
          <div className="min-h-80">
            <h2 className="text-xl font-bold mb-4 text-center">How Would You Like to Proceed?</h2>
            <div className="grid grid-cols-4 gap-4">
              {options.map((option) => (
                <button
                  key={option.action}
                  onClick={() => setSelectedAction(option.action as ActionType)}
                  className={`p-3 rounded-lg transition-all min-h-48 hover:scale-102 ${
                    selectedAction === option.action
                      ? 'bg-blue-100 border border-blue-500 shadow-sm'
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="text-blue-600">
                      {iconMapping[option.action as ActionType] }
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