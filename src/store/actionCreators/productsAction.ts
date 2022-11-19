import { ProductsTypes, ProductFromDB } from '../../utils/types/products'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const getProducts = createAsyncThunk('products/getProducts', async (type: ProductsTypes) => {
   try {
      const productsRef = collection(db, type)
      const result = await getDocs(productsRef)
      const products: ProductFromDB[] = []

      result.docs.forEach((doc) => {
         const { name, ingradients, img, price } = doc.data()
         const product: ProductFromDB = { name, ingradients, img, price, id: doc.id }
         products.push(product)
      })
      return products
   } catch (error) {
      console.log('Error in databese request', error)
   }
})
