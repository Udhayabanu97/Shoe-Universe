import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <>
      <div className="color-container">
        <h2 className="category-title">Colors</h2>
        <section className="sidebar-items">
          <label className="label-container">
            <input onClick={handleChange} type="radio" value="" name="test3" />
            <span className="checkmark all"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value="black"
            name="test3"
            title="Black"
            color="black"
          />
          <label className="label-container">
            <input
              onClick={handleChange}
              type="radio"
              value="white"
              title="White"
              name="test3"
            />
            <span
              className="checkmark all"
              style={{ background: "white", border: "2px solid #000" }}
            ></span>
            White
          </label>

          <Input
            handleChange={handleChange}
            value="blue"
            name="test3"
            title="Blue"
            color="blue"
          />
          <Input
            handleChange={handleChange}
            value="red"
            name="test3"
            title="Red"
            color="red"
          />
          <Input
            handleChange={handleChange}
            value="green"
            name="test3"
            title="Green"
            color="green"
          />
        </section>
      </div>
    </>
  );
}

export default Colors;
