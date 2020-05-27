import React, { useState } from "react"
import { Card as AndtCard } from "antd"
import Meta from "antd/lib/card/Meta"
import ReactCardFlip from "react-card-flip"
import { Button } from "antd/lib/index"

const Card = ({ item, onSelectProduct, onAddToCart }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const onChange = () => {
    setIsFlipped(!isFlipped)
    onSelectProduct(item)
  }
  return (
    <div style={style}>
      <Button type="primary" shape="round" onClick={() => onAddToCart(item)}>
        Buy
      </Button>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <AndtCard
          hoverable
          style={{ width: 240 }}
          onClick={onChange}
          cover={
            <img
              alt="example"
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }>
          <Meta title={item.name} />
        </AndtCard>

        <AndtCard
          hoverable
          style={{ width: 240 }}
          onClick={onChange}
          cover={
            <img
              alt="example"
              src={item.image}
              style={{ minHeight: "320px" }}
            />
          }>
          <Meta title={item.price} />
        </AndtCard>
      </ReactCardFlip>
    </div>
  )
}

export default Card

const style = {
  minHeight: 200,
  maxWidth: 200,
  textAlign: "center",
  marginTop: "10px",
}
