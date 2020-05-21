import React, { useState } from "react"
import { InputNumber, Avatar, Button, Tooltip, Popconfirm } from "antd"
import { List } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

const style = { textAlign: "end", marginTop: "10px" }

function ProductCard({ onQuantityChanged, onDeleteProduct, item }) {
  const [product, setProduct] = useState(item)
  const onChanged = (value) => {
    const data = { ...product, quantity: value }
    setProduct(data)
    onQuantityChanged(data)
  }

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
        <span> = {item.quantity * item.price}</span>
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
