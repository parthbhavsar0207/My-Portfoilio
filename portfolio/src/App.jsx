
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 flex flex-col items-center">
      <div className="w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 w-full bg-white">
          <p>© {new Date().getFullYear()} Alex. Designed and Built with React & Tailwind.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
