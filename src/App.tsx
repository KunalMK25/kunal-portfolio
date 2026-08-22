import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SiteBackground from "./components/SiteBackground";

export default function App() {
  return (
    <>
      <SiteBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
