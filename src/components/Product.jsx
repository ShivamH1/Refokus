import React from "react";
import Button from "./Button";

function Product({ elem }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl capitalize font-medium">{elem.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{elem.description}</p>
          <div className="flex items-center gap-6 ">
            {elem.live && <Button title="Live Website" />}
            {elem.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
