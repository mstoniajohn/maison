import axios from 'axios'
import Cookies from 'js-cookie'
import { createContext, useEffect, useReducer } from 'react'
import { API_URL } from '../config/index'

export const Store = createContext()
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  stats: null,
  melonLive: null,
  members: null,

  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems'))
    : [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true }
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false }

    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      Cookies.set('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      )
      Cookies.set('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    default:
      return state
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }

  // }, []);
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
