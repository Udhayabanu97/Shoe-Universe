import React from "react";
import "./Navigation.css";

function Navigation({ input, handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="search-inputs"
          placeholder="Enter your search"
        />
      </div>
    </nav>
  );
}

export default Navigation;
