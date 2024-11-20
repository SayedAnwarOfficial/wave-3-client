import Contact from "../../components/home/Contact";
import FAQsection from "../../components/home/FAQsection";
import FeaturesProducts from "../../components/home/FeaturesProducts";
import Hero from "../../components/home/Hero";
import Products from "../../components/home/Products";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesProducts />
      <Products />
      <Testimonials />
      <FAQsection />
      <Contact />
    </div>
  );
};

export default Home;
