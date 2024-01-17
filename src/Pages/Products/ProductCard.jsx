import React from "react";
import { Link } from "react-router-dom";
import * as IconsAndImages from "../../Assets/IconsAndImages";

const ProductCard = ({ product, addToCart, scrollToTop }) => (
  <div key={product.id} className="group">
    <Link to={`/productItem/${product.id}`} onClick={scrollToTop}>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 sm:h-80">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-110 duration-500"
        />
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between">
        <h3 className="font-[Montserrat] text-sm text-gray-900">
          {product.title}
        </h3>
        <div className="flex flex-row gap-2 justify-between">
          <p className="font-[Montserrat] text-sm font-medium text-gray-900 line-through">
            ₹{product.oldPrice}
          </p>
          <p className="font-[Montserrat] text-sm font-medium text-gray-900">
            ₹{product.newPrice}
          </p>
        </div>
      </div>
    </Link>
    <div className="mt-4 flex justify-center w-full">
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="flex items-center justify-center w-4/5 py-3 font-[Fahkwang] text-white font-medium text-sm rounded-lg cursor-pointer bg-gray-700 hover:bg-sky-950 transform-transition duration-900 hover:w-full transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
      >
        Add To Cart <IconsAndImages.BsArrowRight />
      </button>
    </div>
  </div>
);

export default ProductCard;
