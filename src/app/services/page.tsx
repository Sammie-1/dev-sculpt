import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import CoreServices from '@/components/CoreServices';
import ServicePackages from '@/components/ServicePackages';
import ServicesCTA from '@/components/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <Header hideGetStarted={true} />
      <main>
        <ServicesHero />
        <CoreServices />
        <ServicePackages />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}

