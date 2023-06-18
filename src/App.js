import React, { useEffect } from "react";
import Header from "./parts/Header";
import Hero from "./parts/Hero";
import Projects from "./parts/Projects";
import Sitemap from "./parts/Sitemap";
import Footer from "./parts/Footer";
import Advantage from "./parts/Advantage";

function App() {
  const refProject = React.useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header ref={refProject} />
      <Hero />
      <Advantage />
      <Projects ref={refProject} />
      <Sitemap />
      <Footer />
    </>
  );
}

export default App;
