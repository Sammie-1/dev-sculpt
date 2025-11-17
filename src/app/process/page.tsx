import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessHero from '@/components/ProcessHero';
import Processes from '@/components/Processes';
import ProcessDeepDive from '@/components/ProcessDeepDive';
import ProcessMethodology from '@/components/ProcessMethodology';
import ProcessCommunication from '@/components/ProcessCommunication';
import ProcessQuality from '@/components/ProcessQuality';
import ServicesCTA from '@/components/ServicesCTA';

export default function ProcessPage() {
  return (
    <>
      <Header hideGetStarted={true} />
      <main>
        <ProcessHero />
        <Processes />
        <ProcessDeepDive />
        <ProcessMethodology />
        <ProcessCommunication />
        <ProcessQuality />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}


