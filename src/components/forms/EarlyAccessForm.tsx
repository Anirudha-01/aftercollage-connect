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
import { earlyAccessFormSchema, type EarlyAccessFormData } from '@/lib/validations';
import { Loader2, Rocket } from 'lucide-react';

const roleOptions = ['Student', 'Faculty', 'Alumni', 'Investor'];

const featureOptions = [
  'Campus feed',
  'Events',
  'Faculty communication',
  'Alumni network',
  'Career opportunities',
];

interface EarlyAccessFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EarlyAccessForm({ open, onOpenChange }: EarlyAccessFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      userRole: '',
      collegeOrganization: '',
      city: '',
      reason: '',
      interestedFeatures: [],
      consent: false,
    },
  });

  const onSubmit = async (data: EarlyAccessFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('early_access_submissions').insert({
        full_name: data.fullName,
        email: data.email,
        phone_number: data.phoneNumber,
        user_role: data.userRole,
        college_organization: data.collegeOrganization || null,
        city: data.city || null,
        reason: data.reason || null,
        interested_features: data.interestedFeatures,
        consent: data.consent,
      });

      if (error) throw error;

      toast.success("You're on the list! We'll notify you when early access opens.");
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting early access form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl font-display gradient-text">Join Early Access</DialogTitle>
          </div>
        </DialogHeader>

        <p className="text-muted-foreground text-sm">
          Be among the first to experience AfterCollage. Get exclusive early access and help shape the future of campus life.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                name="userRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role *</FormLabel>
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

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="collegeOrganization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College / Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Your college or organization" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interestedFeatures"
              render={() => (
                <FormItem>
                  <FormLabel>Features you're most interested in *</FormLabel>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {featureOptions.map((feature) => (
                      <FormField
                        key={feature}
                        control={form.control}
                        name="interestedFeatures"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(feature)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...(field.value || []), feature]
                                    : field.value?.filter((v) => v !== feature) || [];
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {feature}
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
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want early access?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what excites you about AfterCollage..."
                      rows={3}
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
                    I agree to receive updates about AfterCollage early access and product launches. *
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
                  Joining...
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4 mr-2" />
                  Join Early Access
                </>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
