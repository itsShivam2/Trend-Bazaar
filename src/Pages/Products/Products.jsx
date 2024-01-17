import React, { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import MyContext from "../../Context/MyContext"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "./Header";
import CategoryButtons from "./CategoryButtons";
import ProductCard from "./ProductCard";

function Products() {
  const context = useContext(MyContext);
  const { product } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    const defaultQuantity = 1;
    dispatch(addToCart({ ...product, quantity: defaultQuantity }));
    toast.success("Product added to the cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const scrollToTop = () => {
    const element = document.body;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(product);

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((p) => p.category === currentCategory);
      setFilteredProducts(filtered);
    }
  }, [currentCategory, product]);

  return (
    <div>
      <Layout>
        <Header />

        <CategoryButtons setCurrentCategory={setCurrentCategory} />

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addCart}
                  scrollToTop={scrollToTop}
                />
              ))}
            </div>
          </div>
        </div>

      </Layout>
    </div>
  );
}

export default Products;
