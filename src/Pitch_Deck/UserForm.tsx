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
  onSubmit, 
  onClose 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    if (name.trim() && email.trim()) {
      onSubmit({ name,email });
      console.log(name)
      console.log(email)
      onClose();
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
    type="email"  // Add the email type for validation
    value={email}  // Bind to the 'email' state variable
    onChange={(e) => setEmail(e.target.value)}  // Update the email value
    className="col-span-3 rounded-lg" 
    placeholder="Enter your email"
  />
</div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            disabled={!name.trim() || !email.trim()}
            className='bg-blue-400'
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;