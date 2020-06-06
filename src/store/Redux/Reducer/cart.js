import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM,
} from "store/Redux/Actions/cart"

const initialState = {
  list: [
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
      id: 42,
      name: "шарик 42",
      price: 150,
      quantity: 1,
      description: "Some short description for шарик 42",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    },
  ],
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART: {
      const filtered = state.list.filter((item) => item.id !== action.payload)
      return {
        ...state,
        list: filtered,
      }
    }

    case ADD_TO_CART: {
      const found = state.list.find((item) => item.id === action.payload.id)
      const newList = !found
        ? [...state.list, { ...action.payload, quantity: 1 }]
        : state.list.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
      return { ...state, list: newList }
    }
    case UPDATE_ITEM: {
      const newList = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
      return {
        ...state,
        list: newList,
      }
    }

    default:
      return state
  }
}
