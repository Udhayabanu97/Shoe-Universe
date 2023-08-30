import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended">Recommended</h2>
        <div className="shoe-brands">
          <Button handleClick={handleClick} value="" title="All products" />
          <Button handleClick={handleClick} value="Asian" title="Asian" />
          <Button handleClick={handleClick} value="Nike" title="Nike" />
          <Button handleClick={handleClick} value="Adidas" title="Adidas" />
          <Button handleClick={handleClick} value="Puma" title="Puma" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
