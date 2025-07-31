import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ProductList from "./Components/ProductList";
import Counter from "./Components/Counter";
import ProductDetails from "./Components/ProductDetails";
import "./Components/styles.css";
import Product from "./CompB/Product";
import "./CompB/Styless.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        
        <div className="dashboard-header" style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginBottom: "20px"
        }}>
          <h2 style={{ fontWeight: 700, fontSize: "40px", margin: 0 }}>Dashboard</h2>
          <button
            style={{
              padding: "0 20px",
              backgroundColor: "#102C97",
              height: "8vh",
              color: "white",
              border: "none",
              fontWeight: 700,
              fontSize: "24px",
              fontFamily: "Poppins",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            R
          </button>
        </div>

        
        <div className="dashboard-container">
          <ProductList onSelect={setSelectedProduct} />
          <div className="right-section">
            <div className="dashboard-card">
              <Counter />
            </div>
            <div className="dashboard-card">
              <ProductDetails selectedProduct={selectedProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
