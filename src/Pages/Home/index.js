import { connect } from "react-redux"
import { Home as HomeComponent } from "./Home"
import { selectProductAction } from "store/Redux/Actions/products"
import { addToCart } from "store/Redux/Actions/cart"

const actions = {
  selectProductAction,
  addToCart,
}

const mapStateToProps = (state) => ({
  products: state.products,
})
export const Home = connect(mapStateToProps, actions)(HomeComponent)
