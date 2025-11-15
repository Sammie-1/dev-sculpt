import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';

export default function AboutUsPage() {
  return (
    <>
      <Header hideGetStarted={true} />
      <main>
        <AboutHero />
      </main>
      <Footer />
    </>
  );
}

