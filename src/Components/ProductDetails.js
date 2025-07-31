import React from "react";

const ProductDetails = ({ selectedProduct, products = [] }) => {
  return (
    <div className="content">
      <div className="product-header">
        <h3 style={{ fontWeight: "700", fontSize: "24px" }}>Product Details</h3>
        <select className="product-select">
          <option disabled selected value="">
            Select Product
          </option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="detail-card" style={{marginTop:"40px"}}>
        {selectedProduct ? (
          <>
            <p>
              <strong>Name:</strong> {selectedProduct.name}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {selectedProduct.available ? "Available" : "Not Available"}
            </p>
          </>
        ) : (
          <p
            className="placeholder-text"
           
          >
            Product Detail Card
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
