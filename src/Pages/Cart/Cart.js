import React, { useState, useEffect } from "react"
import { List, Row, Col } from "antd"
import ProductCard from "./Blocks/ProductCard"
import Meta from "antd/lib/card/Meta"

export function Cart({ cart, removeFromCart, updateItem }) {
  const [total, setTotal] = useState(0)

  const style = { textAlign: "end", marginRight: "25px" }

  useEffect(() => {
    const result = cart.reduce(calculateTotalSum, 0)
    setTotal(result)
  }, [cart])

  const calculateTotalSum = (accumulator, product) =>
    accumulator + product.quantity * product.price

  const renderItem = (item) => {
    return (
      <ProductCard
        item={item}
        onQuantityChanged={updateItem}
        onDeleteProduct={removeFromCart}
      />
    )
  }
  return (
    <>
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={renderItem}
      />
      <Row justify="end">
        <Col style={style} span={12}>
          <Meta title={`Total: $${total}`} />
        </Col>
      </Row>
    </>
  )
}
