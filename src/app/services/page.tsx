import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, FileCheck, School, Award, Plane, ArrowRight } from "lucide-react";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Services — Study Abroad Services for Nepali Students",
  description: "Gurumantra Education Consultancy offers career counselling, university admission, visa assistance, test preparation (IELTS/PTE), scholarship guidance, and pre-departure support for Nepali students.",
};

const iconMap: Record<string, React.ElementType> = { GraduationCap, BookOpen, FileCheck, School, Award, Plane };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent rounded-full blur-[100px]" />
          <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-accent/60 rounded-full blur-[120px]" />
        </div>
        <div className="container-main max-w-4xl text-center relative z-10">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
          <h1 className="text-5xl lg:text-7xl font-sans font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl lg:text-2xl opacity-80 leading-relaxed font-light">Complete end-to-end support for your study abroad journey — from your first consultation to landing at your dream university.</p>
        </div>
      </section>

      <section className="container-main py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || GraduationCap;
            return (
              <div key={svc.title} className="group bg-card border border-border rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-start premium-shadow hover:-translate-y-1 hover:border-accent transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 leading-tight">{svc.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-accent py-24">
        <div className="container-main text-center">
          <h2 className="text-4xl font-sans font-extrabold text-accent-foreground mb-6">Need Personalised Guidance?</h2>
          <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">Our expert counselors will assess your profile and recommend the best path forward — completely free.</p>
          <Link href="/book-consultation" className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all text-xl shadow-xl">
            Book Free Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
