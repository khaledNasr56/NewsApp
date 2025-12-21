import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Categories from "./Categories";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Categories Section */}
      <Categories />

      {/* Featured News Slider */}
      <Slider />

    </main>
  );
};

export default Home;
