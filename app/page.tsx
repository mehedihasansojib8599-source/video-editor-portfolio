import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { PremiumCTA } from '@/components/premium-cta';
import { Services } from '@/components/services';
import { SectionDivider } from '@/components/section-divider';
import { Skills } from '@/components/skills';
import { Software } from '@/components/software';
import { PortfolioSection } from '@/components/portfolio-section';
import { Testimonials } from '@/components/testimonials';
import { Experience } from '@/components/experience';
import { Process } from '@/components/process';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';

// ---- Section order lives here. Reorder, comment-out, or remove a line to
// change what appears on the homepage — each section is self-contained. ----
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    
      <Services />
      <SectionDivider />
      
      <Software />
      <PortfolioSection />
      <Skills />
      <PremiumCTA />
      <Testimonials />
      <Experience />
      <Process />

      <FAQ />
      <Contact />
      <PremiumCTA />
    </>
  );
}