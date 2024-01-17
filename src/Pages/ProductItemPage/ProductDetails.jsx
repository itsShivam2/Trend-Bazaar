import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

function ProductDetails({ product }) {
  return (
    <div className="w-full flex flex-col justify-start items-start px-5 pt-0 pb-10 lg:py-10 mx-auto gap-2">
      <div className="min-w-full flex flex-wrap justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-0">
        <h2 className="text-4xl font-semibold font-[Fahkwang]">
          {product.title}
        </h2>
        <div className="flex items-center justify-start my-4">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </div>
      </div>
      <p className="text-l sm:text-xl font-semibold text-gray-600 font-[Montserrat]">
        {product.category}
      </p>
      <p className="text-black text-justify leading-relaxed border-b-2 mb-3 pb-5 text-[1rem] font-[Montserrat]">
        {product.description}
      </p>
      <div className="flex items-center gap-6 mt-3">
        <p className="line-through text-2xl font-bold text-gray-600 font-[Montserrat]">
          ₹{product.oldPrice}
        </p>
        <p className="text-2xl font-bold font-[Montserrat]">
          ₹{product.newPrice}
        </p>
      </div>
      <div className="min-w-full flex flex-col sm:flex-row justify-between gap-2 my-4">
      </div>
    </div>
  );
}

export default ProductDetails;
