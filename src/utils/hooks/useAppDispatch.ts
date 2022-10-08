import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useMemo } from 'react'
import {
   addProductToCart,
   deleteProductFromCart,
   decreaseProductCount,
   increaseProductCount,
   clearCart,
   getCartProducts,
} from '../../store/reducers/cartSlice'
import { getProducts } from './../../store/actionCreators/productsAction'

export const useAppDispatch = () => {
   const dispatch = useDispatch()
   return useMemo(
      () =>
         bindActionCreators(
            {
               addProductToCart,
               deleteProductFromCart,
               decreaseProductCount,
               increaseProductCount,
               clearCart,
               getCartProducts,
               getProducts,
            },
            dispatch,
         ),
      [dispatch],
   )
}
