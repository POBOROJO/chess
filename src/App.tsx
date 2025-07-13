import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
