import React, { useState } from "react"
import { Card as AndtCard } from "antd"
import Meta from "antd/lib/card/Meta"
import ReactCardFlip from "react-card-flip"
import { Button } from "antd/lib/index"

const Card = ({ item, onSelectProduct, onAddToCart }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const onBuyClicked = (event) => {
    event.preventDefault()
    console.log("onBuyClicked")
    onAddToCart(item)
  }

  const onChange = () => {
    setIsFlipped(!isFlipped)
    onSelectProduct(item)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <AndtCard
        hoverable
        style={{ width: 240 }}
        onClick={onChange}
        cover={
          <img alt="example" src={item.image} style={{ minHeight: "320px" }} />
        }>
        <Meta title={item.name} />
      </AndtCard>

      <AndtCard
        hoverable
        style={{ width: 240 }}
        onClick={onChange}
        cover={
          <img alt="example" src={item.image} style={{ minHeight: "320px" }} />
        }>
        <Meta title={item.price} />
        <Button type="primary" shape="round" onClick={onBuyClicked}>
          Buy
        </Button>
      </AndtCard>
    </ReactCardFlip>
  )
}

export default Card
