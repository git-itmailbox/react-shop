import React from "react"
import { List} from "antd"
import ProductCard from "./ProductCard"

function ProductList({ products }) {
  console.log(products)

  const onQuantityChanged = (product) => {
    console.log(product)
  }

  const renderItem = (item) => {
    return <ProductCard item={item} onQuantityChanged={onQuantityChanged} />
  }
  return (
    <List
      size="large"
      itemLayout="horizontal"
      dataSource={products}
      renderItem={renderItem}
    />
  )
}

export default ProductList
