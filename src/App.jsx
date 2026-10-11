import { MotionConfig } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Leadership from "./Components/Leadership";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer, { Contact } from "./Components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-8">
          <section id="home">
            <Home />
          </section>
          <Marquee />
          <section id="about" className="pt-20 pb-24">
            <About />
          </section>
          <section id="experience" className="py-24">
            <Experience />
          </section>
          <section id="leadership" className="py-24">
            <Leadership />
          </section>
          <Marquee tilt="rotate-1" />
          <section id="projects" className="py-24">
            <Projects />
          </section>
          <section id="skills" className="py-12">
            <Skills />
          </section>
          <section id="contact" className="pt-24 pb-16">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
