import React from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <section className="sidebar-title">
          <div className="sidebar-name">Shoe Universe</div>

          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </section>
      </section>
    </>
  );
}

export default Sidebar;
