import { Navigation } from "./components/layout/Navigation";
import { ExperienceContent } from "./sections/ExperienceContent";
import { HeroSection } from "./sections/HeroSection";
import "./styles/base.css";

function App() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ExperienceContent />
    </main>
  );
}

export default App;
