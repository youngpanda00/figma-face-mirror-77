
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X } from 'lucide-react';

interface DemoRequestModalProps {
  children: React.ReactNode;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    userLicenses: '',
    role: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[420px] max-w-[420px] bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-bold text-black text-center">REQUEST A DEMO</DialogTitle>
          <p className="text-gray-600 mt-2 text-center">Speak with a Lofty sales productivity expert</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Work Email"
              value={formData.workEmail}
              onChange={(e) => handleInputChange('workEmail', e.target.value)}
              className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Select onValueChange={(value) => handleInputChange('userLicenses', value)}>
              <SelectTrigger className="h-12 bg-gray-50 border-gray-300">
                <SelectValue placeholder="User Licenses Needed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 licenses</SelectItem>
                <SelectItem value="11-50">11-50 licenses</SelectItem>
                <SelectItem value="51-100">51-100 licenses</SelectItem>
                <SelectItem value="100+">100+ licenses</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select onValueChange={(value) => handleInputChange('role', value)}>
              <SelectTrigger className="h-12 bg-gray-50 border-gray-300">
                <SelectValue placeholder="Which best describes your role?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agent">Real Estate Agent</SelectItem>
                <SelectItem value="broker">Broker</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full mt-6"
          >
            Speak with an expert
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign in here
            </a>
          </p>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            By submitting, you agree to Lofty's{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
