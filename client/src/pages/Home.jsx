import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Learning from "../components/Learning/Learning";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import Footer from "../components/Footer/Footer";
import Certificates from "../components/Certificates/Certificates";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="learning">
        <Learning />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;
