import React, { useState } from "react";
import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

// database
import products from "./db/Data";

function App() {
  const [selectCategory, setSelectCategory] = useState(null);

  //  input
  const [input, setInput] = useState("");

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) !==
      -1
  );
  console.log(filteredItems);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // category
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  // button
  const handleClick = (e) => {
    setSelectCategory(e.target.value);
  };

  function filteredData(products, selected, input) {
    let filteredProducts = products;
    if (input) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectCategory, input);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation input={input} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
