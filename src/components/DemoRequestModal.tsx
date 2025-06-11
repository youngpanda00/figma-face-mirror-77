
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
  firstName: z.string().min(1, '请输入名字'),
  lastName: z.string().min(1, '请输入姓氏'),
  workEmail: z.string().email('请输入有效的邮箱地址'),
  phoneNumber: z.string().min(1, '请输入电话号码'),
  userLicenses: z.string().min(1, '请选择用户许可证数量'),
  role: z.string().min(1, '请选择您的角色'),
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
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          work_email: data.workEmail,
          phone_number: data.phoneNumber,
          user_licenses: data.userLicenses,
          role: data.role,
        });

      if (error) {
        throw error;
      }

      toast({
        title: '申请提交成功',
        description: '我们的销售专家会尽快与您联系。',
      });

      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: '提交失败',
        description: '提交申请时出现错误，请稍后重试。',
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
