import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Products from "./Products";
import BentoCards from "./BentoCards";
import TrendingProducts from "./TrendingProducts";
import { Reviews } from "./Reviews";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrendingProducts />
      <Products />
      <BentoCards />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
