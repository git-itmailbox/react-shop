import React, { useState } from "react";
import { Card as AndtCard } from "antd";
import Meta from "antd/lib/card/Meta";
import ReactCardFlip from "react-card-flip";

const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onChange = () => {
    setIsFlipped(!isFlipped);
  };
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
      </AndtCard>
    </ReactCardFlip>
  );
};

export default Card;
