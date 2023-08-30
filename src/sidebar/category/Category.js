import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <>
      <h2 className="category-title">Category</h2>
      <section className="sidebar-items">
        <label className="label-container">
          <input onClick={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          name="test1"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          name="test1"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          name="test1"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          name="test1"
          title="Heels"
        />
      </section>
    </>
  );
}

export default Category;
