import React from "react"
import Card from "./Blocks/Card"

export const Home = ({ selectProductAction, products, addToCart }) => {
  return products.list.map((el) => {
    return (
      <Card
        item={el}
        key={el.id}
        onSelectProduct={selectProductAction}
        onAddToCart={addToCart}
      />
    )
  })
}
