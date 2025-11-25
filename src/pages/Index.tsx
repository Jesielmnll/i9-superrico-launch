import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ContentCarousel from '@/components/ContentCarousel';
import TeamSection from '@/components/TeamSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CertificateSection from '@/components/CertificateSection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ContentCarousel />
        <TeamSection />
        <TestimonialsCarousel />
        <CertificateSection />
        <ContactForm />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;