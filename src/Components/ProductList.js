import React from "react";
import CheckIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Cancel";

export const products = [
  { id: 1, name: "Product 1", available: false },
  { id: 2, name: "Product 2", available: true },
  { id: 3, name: "Product 3", available: false },
  { id: 4, name: "Product 4", available: true },
  { id: 5, name: "Product 5", available: false },
  { id: 6, name: "Product 6", available: true },
  { id: 7, name: "Product 7", available: false },
  { id: 8, name: "Product 8", available: true },
];

const ProductList = ({ onSelect }) => {
  return (
    <div className="product-list-container">
      <div className="product-header">
        <h3 className="product-list-title">List of Products</h3>
        <div className="product-search">
          <input type="text" placeholder="Search Product..." />
          <span role="img" aria-label="search" className="search-icon">
            🔍
          </span>
        </div>
      </div>

      <div className="product-list-scroll">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => onSelect(product)}
          >
            <div className="product-info">
              <strong>{product.name}</strong>
              <span>{product.name}</span>
            </div>
            <div className="product-icon">
              {product.available ? (
                <CheckIcon className="available" />
              ) : (
                <CloseIcon className="unavailable" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
