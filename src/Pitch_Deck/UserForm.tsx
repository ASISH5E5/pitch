import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {   
  Dialog,   
  DialogContent,   
  DialogDescription,   
  DialogFooter,   
  DialogHeader,   
  DialogTitle, 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserModalProps {
  isOpen: boolean;
  onSubmit: (userData: { name: string; email: string }) => void;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (name.trim() && email.trim()) {
      // Send the form data to your backend API
      try {
        const response = await fetch(
          "https://api.sheetbest.com/sheets/cd673c18-e1a2-44b6-a71e-34e111548e2d", // Replace with your API endpoint
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          }
        );

        if (response.ok) {
          setSubmitted(true); // Set the submitted state to true if the data was submitted successfully
          onClose(); // Close the modal after successful submission
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
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] rounded-xl bg-white">
        <DialogHeader>
          <DialogTitle>Welcome to Enligence Pitch Deck</DialogTitle>
          <DialogDescription>
            Please provide your name and username to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right mt-2">
              Name
            </Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 rounded-lg" 
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input 
              id="email" 
              type="email"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="col-span-3 rounded-lg" 
              placeholder="Enter your email"
            />
          </div>
        </div>
        <DialogFooter>
          {submitted ? (
            <div className="text-center text-sm text-green-500">
              Thank you for your response! Your data has been submitted.
            </div>
          ) : (
            <Button 
              type="button" 
              onClick={handleSubmit}
              disabled={!name.trim() || !email.trim()}
              className='bg-blue-400'
            >
              Save changes
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
