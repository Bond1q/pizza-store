import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   CartState,
   UnorderedProducts,
   AdditionProductToCart,
   DeletionProductFromCart,
   ChangeProductCountInCart,
} from '../../utils/types/cart'
import LocalStorage from '../../utils/localStorage/localStorage'

const initialState: CartState = {
   totalPrice: 0,
   productsCount: 0,
   products: [],
}

const storage = new LocalStorage('cart')

const getTotalProductsPrice = (products: UnorderedProducts[]) => {
   return products.reduce(
      (prevValue, currentVal) => prevValue + currentVal.price * currentVal.count,
      0,
   )
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProductToCart(state, action: PayloadAction<AdditionProductToCart>) {
         const { product, count } = action.payload
         state.totalPrice = state.totalPrice + product.price * count
         const index = state.products.findIndex((el) => el.id === product.id)
         if (index !== -1) {
            state.products[index].count++
         } else {
            state.products.push({ ...product, count: count })
            state.productsCount++
         }
         storage.setUnorderedProducts(state.totalPrice, state.productsCount, state.products)
      },

      deleteProductFromCart(state, action: PayloadAction<DeletionProductFromCart>) {
         state.products = state.products.filter((product) => product.id !== action.payload.id)
         state.productsCount--
         state.totalPrice = getTotalProductsPrice(state.products)
         storage.setUnorderedProducts(state.totalPrice, state.productsCount, state.products)
      },

      decreaseProductCount(state, action: PayloadAction<ChangeProductCountInCart>) {
         state.products = state.products
            .filter((product) => !(product.id === action.payload.id && product.count === 1))
            .map((product) => {
               if (product.id === action.payload.id) {
                  product.count--
               }
               return product
            })
         state.productsCount = state.products.length
         state.totalPrice = getTotalProductsPrice(state.products)
         storage.setUnorderedProducts(state.totalPrice, state.productsCount, state.products)
      },

      increaseProductCount(state, action: PayloadAction<ChangeProductCountInCart>) {
         state.products = state.products.map((product) => {
            if (product.id === action.payload.id) {
               product.count++
            }
            return product
         })
         state.productsCount = state.products.length
         state.totalPrice = getTotalProductsPrice(state.products)
         storage.setUnorderedProducts(state.totalPrice, state.productsCount, state.products)
      },

      clearCart(state) {
         storage.clearStorage()
         state.products = []
         state.productsCount = 0
         state.totalPrice = 0
      },
      getCartProducts(state) {
         const data = storage.getData()
         if (data) {
            const productsLocalStorage: CartState = JSON.parse(data)
            state.products = productsLocalStorage.products
            state.productsCount = productsLocalStorage.productsCount
            state.totalPrice = productsLocalStorage.totalPrice
         }
      },
   },
})

export default cartSlice.reducer
export const {
   addProductToCart,
   deleteProductFromCart,
   decreaseProductCount,
   increaseProductCount,
   clearCart,
   getCartProducts,
} = cartSlice.actions
