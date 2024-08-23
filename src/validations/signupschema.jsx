import { z } from 'zod';

// Schema for the first form
export const SignupFormSchema1 = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits long.' }).trim(),
  address: z.string().min(5, { message: 'Address must be at least 5 characters long.' }).trim(),
});

// Schema for the second form
export const SignupFormSchema2 = z.object({
  verificationCode: z.string().min(6, { message: 'Verification code must be 6 characters long.' }).trim(),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character.' })
    .trim(),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // set the path of the error message
});
