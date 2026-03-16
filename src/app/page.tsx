"use client";
"Use client";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogosStrip from "@/components/sections/LogosStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Privacy from "@/components/sections/Privacy";
import Testimonials from "@/components/sections/Testimonials";
import Waitlist from "@/components/sections/Waitlist";
import Divider from "@/components/ui/Divider";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Nav />
      <main>
        <Hero />
        <LogosStrip />
        <Divider />
        <HowItWorks />
        <Divider />
        <Features />
        <Privacy />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </ScrollRevealProvider>
  );
}
