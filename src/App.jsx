import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans selection:bg-green-200">
      <BrowserRouter>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 space-y-24">
          <section id="home">
            <Home />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
