import React, { useContext, useEffect, useState } from "react";
import "../../pages/Home/Homepage.css";
import { ProductContext } from "../../context/ProductContext";

const Homepage = () => {
  const { data, loading } = useContext(ProductContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const cleanData = products.map((item) => {
    const imageUrl = item["Image Small"] || item["Image_1"];

    return {
      price: item["Cost Price"],
      imageUrl: item["Image Small"],
      SKU: item.SKU,
      Brand: item.Brand,
      Title: item.Title,
      Description: item.Description,
      Quantity: item.Quantity,
      size: item.size,
    };
  });

  return (
    <div className="home">
      <p className="heading">Department List</p>
      <div className="data-table">
        <div className="data-layout">
          <div className="data-sn">
            <label id="label" className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <span className="checkmark">S/N</span>
            </label>
          </div>
          <p>Image</p>
          <p>SKU</p>
          <p>Name</p>
          <p>Title</p>
          <p>Description</p>
          <p>Brand</p>
          <p>Cost Price</p>
          <p>Quantity</p>
          <p>Size</p>
        </div>
      </div>
      {loading ? (
        <div className="spinner">
          <div className="spin"></div>
        </div>
      ) : (
        <div className="container">
          {cleanData.map((product, index) => (
            <div key={index} className="data-layout">
              <div className="data-sn">
                <label id="label">
                  <input type="checkbox" />
                  <span className="checkmark">{index + 1}</span>
                </label>
              </div>
              <img
                className="product-image"
                src={product.imageUrl}
                alt="image"
              />
              <p>{product.SKU}</p>
              <p>{product.Brand}</p>
              <p>{product.Title.slice(0, 30)}</p>
              <p>{product.Description.slice(0, 50)}</p>
              <p>{product.Brand}</p>
              <p>${product.price}</p>
              <p>{product.Quantity}</p>
              <p>{product.size}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
