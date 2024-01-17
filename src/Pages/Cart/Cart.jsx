import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MyContext from "../../Context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCartItemQuantity } from "../../Redux/CartSlice";
import { toast } from "react-toastify";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function Cart() {
  const context = useContext(MyContext);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Product deleted from cart");
  };

  const updateQuantity = (item, newQuantity) => {
    dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.newPrice) * cartItem.quantity;
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(40);
  const grandTotal = shipping + totalAmount;

  return (
    <div>
      <Layout>
        <div className="max-w-screen-xl flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mx-auto my-4 px-4">
          <div className="flex flex-col gap-8 lg:w-[65%]">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onDelete={() => deleteCart(item)}
                onUpdateQuantity={(newQuantity) =>
                  updateQuantity(item, newQuantity)
                }
              />
            ))}
          </div>

          <CartTotal
            totalAmount={totalAmount}
            shipping={shipping}
            grandTotal={grandTotal}
          />
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
