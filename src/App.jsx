import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-dark text-brand-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-brand-sky/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-orangeStrong/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
