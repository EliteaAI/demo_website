import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import TriangleSection from '../components/TriangleSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BottomCTASection from '../components/BottomCTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <TriangleSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <BottomCTASection />
        <Footer />
      </main>
    </>
  );
}
