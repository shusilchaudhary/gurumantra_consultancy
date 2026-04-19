"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationSchema, type ConsultationFormData } from "@/lib/schemas";
import { useState } from "react";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const destinationOptions = ["Australia", "Canada", "UK", "USA", "New Zealand", "Germany", "Japan", "Ireland", "Not Sure Yet"];
const educationOptions = ["+2 / High School", "Bachelor's Running", "Bachelor's Completed", "Master's Completed", "Other"];

export default function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = (data: ConsultationFormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Book a Free Consultation</h1>
          <p className="text-lg opacity-80">Talk to our expert counselors about your study abroad goals. No fees, no pressure — just honest guidance tailored to you.</p>
        </div>
      </section>

      <section className="container-main py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-10 text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground">We&apos;ve received your details. Our counselor will contact you within 24 hours to schedule your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input id="fullName" {...register("fullName")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your full name" />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                    <input id="email" type="email" {...register("email")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number *</label>
                    <input id="phone" {...register("phone")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+977 98XXXXXXXX" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium mb-1.5">Preferred Destination *</label>
                    <select id="destination" {...register("destination")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select destination</option>
                      {destinationOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium mb-1.5">Education Level *</label>
                    <select id="education" {...register("education")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select level</option>
                      {educationOptions.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                    {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Additional Message (optional)</label>
                  <textarea id="message" rows={4} {...register("message")} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your goals..." />
                </div>
                <button type="submit" className="w-full py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
                  Submit — Get Free Consultation
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Why Choose Gurumantra Education Consultancy?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["98% visa success rate", "2,000+ students placed", "200+ university partners", "Free, no-obligation consultation", "Expert counselors with abroad experience"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-lg mb-3">Contact Details</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><Phone className="w-4 h-4 text-accent" /> +977-01-4XXXXXX</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><Mail className="w-4 h-4 text-accent" /> info@gurumantra.edu.np</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-accent" /> Putalisadak, Kathmandu</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground"><Clock className="w-4 h-4 text-accent" /> Sun–Fri, 10 AM – 5 PM</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
