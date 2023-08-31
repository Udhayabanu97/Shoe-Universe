import React, { useState } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  // const [addedToCart, setAddedToCart] = useState(false);

  // const handleAddToCart = () => {
  //   setAddedToCart(true);
  // };
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-image" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="bag">
              <BsFillBagCheckFill />
            </div>
          </section>
          {/* <footer>
            <button className="card-footer" onClick={handleAddToCart}>
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </footer> */}
        </div>
      </section>
    </>
  );
}

export default Card;
