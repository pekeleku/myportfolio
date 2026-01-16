import { ThemeProvider } from "./context/ThemeContext";
import Header from "./parts/Header";
import Hero from "./parts/Hero";
import Projects from "./parts/Projects";
import Sitemap from "./parts/Sitemap";
import Footer from "./parts/Footer";
import Advantage from "./parts/Advantage";
import ScrollToTop from "./components/reusable/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Advantage />
      <Projects />
      <Sitemap />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
