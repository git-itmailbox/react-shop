import React, { useState, useEffect } from "react"
import { List, Space, Row, Col } from "antd"
import ProductCard from "./Blocks/ProductCard"
import Meta from "antd/lib/card/Meta"

function Cart() {
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState(data)

  const style = { textAlign: "end", marginRight: "25px" }

  const onQuantityChanged = (product) => {
    const data = products.map((item) =>
      item.id === product.id ? product : item
    )
    setProducts(data)
  }

  const onDeleteProduct = (id) => {
    const data = products.filter((item) => item.id !== id)
    setProducts(data)
  }

  useEffect(() => {
    const result = products.reduce(calculateTotalSum, 0)
    setTotal(result)
  }, [products])

  const calculateTotalSum = (accumulator, product) =>
    accumulator + product.quantity * product.price

  const renderItem = (item) => {
    return (
      <ProductCard
        item={item}
        onQuantityChanged={onQuantityChanged}
        onDeleteProduct={onDeleteProduct}
      />
    )
  }
  return (
    <>
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={products}
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

export default Cart

const data = [
  {
    id: 1,
    name: "шарик",
    price: 10,
    quantity: 1,
    description: "Some short description for шарик",
    image:
      "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
  },
  {
    id: 2,
    name: "футболка",
    price: 40,
    quantity: 1,
    description: "Some short description for футболка",
    image:
      "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
  },
  {
    id: 4,
    name: "шарик 2",
    price: 50,
    quantity: 1,
    description: "Some short description for шарик 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
  },
]
