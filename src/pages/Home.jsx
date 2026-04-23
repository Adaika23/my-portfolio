// Import all sections (components) that make up your page
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Home component = main layout of your entire website
function Home() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Hero section (intro / first impression) */}
      <Hero />

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />

      {/* Footer at bottom */}
      <Footer />
    </>
  );
}

// Export so App.jsx can use it
export default Home;