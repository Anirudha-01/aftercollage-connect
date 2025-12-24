import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { partnerFormSchema, type PartnerFormData } from '@/lib/validations';
import { Loader2 } from 'lucide-react';

const roleOptions = [
  'Student',
  'Investor',
  'Faculty',
  'Alumni',
  'Institution / Admin',
  'Brand / Company',
  'Other',
];

const areasOfInterestOptions = [
  'Investment',
  'Institutional partnership',
  'Brand collaboration',
  'Campus rollout',
  'Mentorship',
  'Other',
];

const domainOptions = [
  'Education',
  'Technology',
  'Community',
  'Recruitment',
  'Branding',
];

interface PartnerFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerForm({ open, onOpenChange }: PartnerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      userRole: '',
      organizationName: '',
      areasOfInterest: [],
      interestedDomains: [],
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('partner_submissions').insert({
        full_name: data.fullName,
        phone_number: data.phoneNumber,
        email: data.email,
        user_role: data.userRole,
        organization_name: data.organizationName || null,
        areas_of_interest: data.areasOfInterest,
        interested_domains: data.interestedDomains,
        message: data.message || null,
        consent: data.consent,
      });

      if (error) throw error;

      toast.success('Thank you for your interest! We will get back to you soon.');
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting partner form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display gradient-text">Partner With Us</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
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
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roleOptions.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization / College / Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="areasOfInterest"
              render={() => (
                <FormItem>
                  <FormLabel>Area of Interest *</FormLabel>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {areasOfInterestOptions.map((area) => (
                      <FormField
                        key={area}
                        control={form.control}
                        name="areasOfInterest"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(area)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...(field.value || []), area]
                                    : field.value?.filter((v) => v !== area) || [];
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {area}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interestedDomains"
              render={() => (
                <FormItem>
                  <FormLabel>Interested Domain *</FormLabel>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {domainOptions.map((domain) => (
                      <FormField
                        key={domain}
                        control={form.control}
                        name="interestedDomains"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(domain)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...(field.value || []), domain]
                                    : field.value?.filter((v) => v !== domain) || [];
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {domain}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message / Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your interest..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-tight cursor-pointer">
                    I agree to be contacted by AfterCollage regarding partnership opportunities. *
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full gradient-bg text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Partnership Request'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
