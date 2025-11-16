import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessHero from '@/components/ProcessHero';
import Processes from '@/components/Processes';
import ProcessDeepDive from '@/components/ProcessDeepDive';

export default function ProcessPage() {
  return (
    <>
      <Header hideGetStarted={true} />
      <main>
        <ProcessHero />
        <Processes />
        <ProcessDeepDive />
      </main>
      <Footer />
    </>
  );
}

