import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  destination: z.string().min(1, "Please select a destination"),
  education: z.string().min(1, "Please select your education level"),
  message: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
