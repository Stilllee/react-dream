import React, { useState } from "react";
import Product from "./components/Product";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Product />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
