import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Verticals from "@/components/Verticals";
import FeaturedWork from "@/components/FeaturedWork";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CredibilitySection from "@/components/CredibilitySection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import CareersCTA from "@/components/CareersCTA";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />
      <Hero />
      <Intro />
      <Verticals />
      <FeaturedWork />
      <CapabilitiesSection />
      <CredibilitySection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <CareersCTA />
      <ContactCTA />
    </main>
  );
}