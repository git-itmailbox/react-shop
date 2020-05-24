import { SELECT_PRODUCT } from "store/Redux/Actions/products"

const initialState = {
  list: [
    {
      id: 1,
      name: "шарик",
      price: 10,
      description: "Some short description for шарик",
      image:
        "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
    },
    {
      id: 2,
      name: "футболка",
      price: 40,
      description: "Some short description for футболка",
      image:
        "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
    },
    {
      id: 4,
      name: "шарик 2",
      price: 50,
      description: "Some short description for шарик 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    },
  ],
  selectedProduct: null,
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      console.log("in reducer", action)
      return {
        ...state,
        selectedProduct: action.product,
      }
    }

    default:
      return state
  }
}
