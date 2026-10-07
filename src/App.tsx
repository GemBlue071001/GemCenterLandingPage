import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { ExperienceContent } from "./sections/ExperienceContent";
import { HeroSection } from "./sections/HeroSection";
import { LocationSection } from "./sections/LocationSection";
import "./styles/base.css";

function App() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ExperienceContent />
      <LocationSection />
      <Footer />
    </main>
  );
}

export default App;
