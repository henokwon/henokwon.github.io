import { BrowserRouter } from "react-router-dom";

import {
  About,
  Consulting,
  Contact,
  Experience,
  Certifications,
  Organizations,
  Hero,
  Navbar,
  SimulationLayer,
  Tech,
  Works,
} from "./components";
import { MotionConfig } from "framer-motion";
import DecorativeCanvas from "./components/layout/DecorativeCanvas";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="never">
        <div className="bg-primary relative z-0 overflow-x-clip">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SimulationLayer />
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <main id="main-content" tabIndex={-1}>
            <About />
            <Experience />
            <Organizations />
            <Certifications />
            <Tech />
            <Works />
            <Consulting />
            <div className="relative z-0">
              <Contact />
              <div className="pointer-events-none absolute inset-0 -z-10">
                <DecorativeCanvas scene="stars" />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
