import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Processes from '@/components/Processes';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Processes />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

