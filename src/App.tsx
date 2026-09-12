import { LanguageProvider } from "./context/LanguageContext";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Intro } from "./sections/Intro";
import { KeyFacts } from "./sections/KeyFacts";
import { Gallery } from "./sections/Gallery";
import { TheRustico } from "./sections/TheRustico";
import { Outside } from "./sections/Outside";
import { Amenities } from "./sections/Amenities";
import { Location } from "./sections/Location";
import { Access } from "./sections/Access";
import { Price } from "./sections/Price";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <Intro />
        <KeyFacts />
        <Gallery />
        <TheRustico />
        <Outside />
        <Amenities />
        <Location />
        <Access />
        <Price />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
