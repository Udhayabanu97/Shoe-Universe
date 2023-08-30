import React from "react";

function Input({ handleChange, value, name, title, color }) {
  return (
    <label className="label-container">
      <input onClick={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}

export default Input;
