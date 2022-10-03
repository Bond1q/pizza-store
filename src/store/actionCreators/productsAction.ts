import { Dispatch } from 'redux'
import {
   GetProductsTypes,
   Product,
   ProductsAction,
   ProductsActionTypes,
} from '../../types/products'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
export const getProducts = (type: GetProductsTypes) => {
   return async (dispatch: Dispatch<ProductsAction>) => {
      try {
         dispatch({ type: ProductsActionTypes.TOGGLE_LOADING, isLoading: true })
         const productsRef = collection(db, type)
         const result = await getDocs(productsRef)
         const products: Product[] = []
         result.docs.forEach((doc) => {
            const { name, ingradients, img, price } = doc.data()
            const product: Product = { name, ingradients, img, price, id: doc.id }
            products.push(product)
         })
         dispatch({ type: ProductsActionTypes.SET_PRODUCTS, products })
      } catch (error) {
         console.log(error)
      }
   }
}
