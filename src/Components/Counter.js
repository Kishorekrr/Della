import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-container">
      <h3 className="section-title" style={{margin:"0px",fontWeight:"700"}}>Counter with products</h3>

      <div className="counter-controls">
        <button className="counter-btn" onClick={decrement}>-</button>
        <span className="count-display">{count}</span>
        <button className="counter-btn" onClick={increment}>+</button>
      </div>

      <div className="counter-boxes">
        {[1, 2, 3].map((val) => (
          <div key={val} className="counter-box">{val}</div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
