import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { toast } from "react-toastify";
import { fireDB } from "../../Firebase/FireBaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ProductItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const productTemp = await getDoc(doc(fireDB, "products", id));
        setProduct(productTemp.data());
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getProductData();
  }, [id]);

  const addCart = () => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      dispatch(
        addToCart({ ...product, quantity: existingItem.quantity + quantity })
      );
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }

    toast.success("Product added to the cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Layout>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-4 max-w-screen-xl">
          {product && <ProductImage imageUrl={product.imageUrl} />}
          {product && <ProductDetails product={product} />}
          <QuantitySelector
            quantity={quantity}
            onDecrease={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            onIncrease={() => setQuantity((prev) => prev + 1)}
          />
          {product && <AddToCartButton onClick={addCart} />}
        </div>
      </Layout>
    </div>
  );
}

export default ProductItemPage;
