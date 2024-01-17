import React from "react";
import Layout from "../../Components/Layout/Layout";
import HomeDesignerCategories from "./DesignerCategories/HomeDesignerCategories";
import ExploreMoreButton from "./ExploreMoreButton";
import FeaturedProducts from "./FeaturedProducts";
import BestFeatureSection from "../../Components/BestFeatureSection/BestFeatureSection";
import NewsletterFeatureSection from "../../Components/NewsletterFeatureSection/NewsletterFeatureSection";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
function Home(props) {
  const context = useContext(MyContext);
  const { product } = context;

  const featuredProducts = product.slice(0, 8);

  const scrollToTop = () => {
    const element = document.body;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <HomeDesignerCategories />
      <FeaturedProducts
        featuredProducts={featuredProducts}
        scrollToTop={scrollToTop}
      />
      <ExploreMoreButton />
      <BestFeatureSection />
      <NewsletterFeatureSection />
    </Layout>
  );
}

export default Home;
