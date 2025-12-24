import { z } from 'zod';

// India phone number validation (10 digits, optionally with +91)
const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

export const partnerFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  phoneNumber: z.string().trim().regex(phoneRegex, 'Please enter a valid Indian phone number'),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  userRole: z.string().min(1, 'Please select your role'),
  organizationName: z.string().trim().max(200).optional(),
  areasOfInterest: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  interestedDomains: z.array(z.string()).min(1, 'Please select at least one domain'),
  message: z.string().trim().max(2000, 'Message must be less than 2000 characters').optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  phone: z.string().trim().regex(phoneRegex, 'Please enter a valid Indian phone number').optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

export const earlyAccessFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  phoneNumber: z.string().trim().regex(phoneRegex, 'Please enter a valid Indian phone number'),
  userRole: z.string().min(1, 'Please select your role'),
  collegeOrganization: z.string().trim().max(200).optional(),
  city: z.string().trim().max(100).optional(),
  reason: z.string().trim().max(1000, 'Reason must be less than 1000 characters').optional(),
  interestedFeatures: z.array(z.string()).min(1, 'Please select at least one feature'),
  consent: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EarlyAccessFormData = z.infer<typeof earlyAccessFormSchema>;
