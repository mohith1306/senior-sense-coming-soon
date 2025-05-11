// app/page.js
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Features from '../components/Features';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Features />
      <Waitlist />
      <Footer />
    </>
  );
}
