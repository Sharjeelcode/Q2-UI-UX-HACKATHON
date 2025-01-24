import React, { useState } from "react";

function QuanitityBtn() {
  const [productQuantity, setproductQuantity] = useState(1);
  function quantityHandler(value: string) {
    if (value === "-") {
      if (productQuantity === 1) {
        return;
      }
      setproductQuantity(productQuantity - 1);
    }
    if (value === "+") {
      setproductQuantity(productQuantity + 1);
    }
  }

  return (
    <div className="flex">
      <button
        className="border-2 py-1 px-4 border-r-0"
        onClick={() => quantityHandler("-")}
      >
        -
      </button>
      <p className="border-2 px-4 py-1">{productQuantity}</p>
      <button
        className="border-2 px-4 py-1 border-l-0"
        onClick={() => quantityHandler("+")}
      >
        +
      </button>
    </div>
  );
}

export default QuanitityBtn;
