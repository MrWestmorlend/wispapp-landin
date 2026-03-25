import Header from "./components/header/index";
import Hero from "./components/hero/index";
import PhoneMockup from "./components/phonemockup/index";
import PostsGrid from "./components/postsgrid/index";
import Footer from "./components/footer/index";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <PhoneMockup />
      <PostsGrid />
      <Footer />
    </div>
  );
}
