import React, { useState, useEffect } from "react"
import { InputNumber, Avatar, Button, Tooltip, Popconfirm } from "antd"
import { List } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

function ProductCard({ onQuantityChanged, onDeleteProduct, item }) {
  const [product, setProduct] = useState(item)
  const [total, setTotal] = useState(0)
  const onChanged = (value) => {
    const data = { ...product, quantity: value }
    setProduct(data)
    onQuantityChanged(data)
  }

  useEffect(() => {
    setTotal(item.quantity * item.price)
  }, [item])

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={product.image} />}
        title={product.name}
        description={product.description}
      />
      <div>
        <span>{product.price} x </span>
        <InputNumber
          size="small"
          min={0}
          max={100}
          defaultValue={product.quantity}
          onChange={onChanged}
        />
        <span> = {total}</span>
        <div style={style}>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={() => onDeleteProduct(item.id)}
            placement="left"
            okText="Yes"
            cancelText="Cancel">
            <Tooltip title="Delete from cart">
              <Button
                danger
                type="primary"
                size="small"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Popconfirm>
        </div>
      </div>
    </List.Item>
  )
}

export default ProductCard

const style = { textAlign: "end", marginTop: "10px" }
