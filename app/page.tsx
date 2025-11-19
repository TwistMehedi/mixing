import Categories from "./components/HomePage/Categories";
import Features from "./components/HomePage/Features";
import Footer from "./components/HomePage/Footer";
import HeroSection from "./components/HomePage/HeroSection";
 
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
