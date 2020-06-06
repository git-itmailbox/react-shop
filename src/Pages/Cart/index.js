import { connect } from "react-redux"
import { Cart as CartComponent } from "./Cart"
import { removeFromCart, updateItem } from "store/Redux/Actions/cart"

const actions = {
  removeFromCart,
  updateItem,
}

const mapStateToProps = (state) => ({
  cart: state.cart.list,
})
export const Cart = connect(mapStateToProps, actions)(CartComponent)
