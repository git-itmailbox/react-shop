import React, { useState } from "react";
import ProductList from "./Blocks/ProductList";

function Cart() {
  const [products] = useState([data]);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Cart;

const data = [
  {
    id: 1,
    name: "шарик",
    price: 10,
    image:
      "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
  },
  {
    id: 2,
    name: "футболка",
    price: 40,
    image:
      "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
  },
  {
    id: 4,
    name: "шарик 2",
    price: 50,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
  },
];
