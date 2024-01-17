import React, { useContext } from "react";
import Layout from "../Components/Layout/Layout";
import MyContext from "../Context/MyContext";
import ProductFormInput from "./ProductFormInput";
import { FaArrowRight } from "react-icons/fa";

function AddProduct() {
  const context = useContext(MyContext);
  const { products, setProducts, addProduct } = context;

  return (
    <Layout>
      <div className="relative mx-auto my-8 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-teal-600 px-2 py-2 underline underline-offset-4">
              Shopaholic
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Add Product
            </h2>
          </div>

          <div className="mt-5">
            <div>
              <ProductFormInput
                name="product-title"
                label="Product Title"
                placeholder="Product Title"
                onChange={(e) =>
                  setProducts({ ...products, title: e.target.value })
                }
                value={products.title}
              />
              <ProductFormInput
                name="product-oldPrice"
                label="Product Old Price"
                placeholder="Product Old Price"
                onChange={(e) =>
                  setProducts({ ...products, oldPrice: e.target.value })
                }
                value={products.oldPrice}
              />
              <ProductFormInput
                name="product-newPrice"
                label="Product New Price"
                placeholder="Product New Price"
                onChange={(e) =>
                  setProducts({ ...products, newPrice: e.target.value })
                }
                value={products.newPrice}
              />
              <ProductFormInput
                name="product-url"
                label="Product Image Url"
                placeholder="Product Image Url"
                onChange={(e) =>
                  setProducts({ ...products, imageUrl: e.target.value })
                }
                value={products.imageUrl}
              />
              <ProductFormInput
                name="product-rating"
                label="Product Rating"
                placeholder="Product Rating"
                onChange={(e) =>
                  setProducts({ ...products, rating: e.target.value })
                }
                value={products.rating}
              />

              <ProductFormInput
                name="product-category"
                label="Product Category"
                placeholder="Product Category"
                onChange={(e) =>
                  setProducts({ ...products, category: e.target.value })
                }
                value={products.category}
              />
              <ProductFormInput
                name="product-description"
                label="Product Description"
                placeholder="Product Description"
                onChange={(e) =>
                  setProducts({ ...products, description: e.target.value })
                }
                value={products.description}
              />
            </div>
          </div>

          <div className="my-6">
            <button
              onClick={addProduct}
              className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:drop-shadow-lg transform-transition duration-1000"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
