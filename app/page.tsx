import Header from "./components/header/index";
import Hero from "./components/hero/index";
import PhoneMockup from "./components/phonemockup/index";
import Footer from "./components/footer/index";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated mist background */}
      <div className="mist-container">
        <div className="mist"></div>
        <div className="mist"></div>
        <div className="mist"></div>
        <div className="mist"></div>
        <div className="mist"></div>
      </div>
      
      <Header />
      <Hero />
      <PhoneMockup />
      <Footer />
    </div>
  );
}
