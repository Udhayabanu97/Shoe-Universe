import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <>
      <div className="price-container">
        <h2 className="category-title price-title">Price</h2>
        <section className="sidebar-items">
          <label className="label-container">
            <input onClick={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            name="test2"
            title="0-$50"
          />
          <Input
            handleChange={handleChange}
            value={100}
            name="test2"
            title="50-$100"
          />
          <Input
            handleChange={handleChange}
            value={150}
            name="test2"
            title="100-$150"
          />
          <Input
            handleChange={handleChange}
            value={200}
            name="test2"
            title="Over $150"
          />
        </section>
      </div>
    </>
  );
}

export default Price;
