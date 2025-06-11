
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  userLicenses: z.string().min(1, 'Please select number of user licenses'),
  role: z.string().min(1, 'Please select your role'),
});

type FormData = z.infer<typeof formSchema>;

interface DemoRequestModalProps {
  children: React.ReactNode;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      phoneNumber: '',
      userLicenses: '',
      role: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submission started with data:', data);
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to insert into Supabase...');
      
      const insertData = {
        first_name: data.firstName,
        last_name: data.lastName,
        work_email: data.workEmail,
        phone_number: data.phoneNumber,
        user_licenses: data.userLicenses,
        role: data.role,
      };
      
      console.log('Insert data prepared:', insertData);
      
      const { data: insertResult, error } = await supabase
        .from('demo_requests')
        .insert(insertData)
        .select();

      console.log('Supabase insert result:', insertResult);
      console.log('Supabase insert error:', error);

      if (error) {
        console.error('Supabase error details:', error);
        throw error;
      }

      console.log('Insert successful, showing success toast');
      
      toast({
        title: 'Request submitted successfully',
        description: 'Our sales expert will contact you soon.',
      });

      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: 'Submission failed',
        description: 'An error occurred while submitting your request. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[420px] max-w-[420px] bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-bold text-black text-center">REQUEST A DEMO</DialogTitle>
          <p className="text-gray-600 mt-2 text-center">Speak with a Lofty sales productivity expert</p>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="workEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-12 bg-gray-50 border-gray-300 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="userLicenses"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-300">
                        <SelectValue placeholder="User Licenses Needed" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 licenses</SelectItem>
                      <SelectItem value="11-50">11-50 licenses</SelectItem>
                      <SelectItem value="51-100">51-100 licenses</SelectItem>
                      <SelectItem value="100+">100+ licenses</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-300">
                        <SelectValue placeholder="Which best describes your role?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="agent">Real Estate Agent</SelectItem>
                      <SelectItem value="broker">Broker</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Speak with an expert'}
            </Button>
          </form>
        </Form>
        
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
