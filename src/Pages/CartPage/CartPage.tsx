import React, { FC, useEffect } from 'react'

import CartProduct from '../../Components/CartProduct/CartProduct'
import MakeOrder from '../../Components/MakeOrder/MakeOrder'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'
import st from './CartPage.module.scss'

const CartPage: FC = () => {
   const { totalPrice, products } = useAppSelector((state) => state.cart)
   const {
      deleteProductFromCart,
      increaseProductCount,
      decreaseProductCount,
      clearCart,
      getCartProducts,
   } = useAppDispatch()

   useEffect(() => {
      if (products.length == 0) getCartProducts()
   }, [])
   return (
      <div className={st.cartPage}>
         <div className={st.container}>
            {products?.length === 0 ? (
               <h1 className={st.emptyCart}>Cart is empty!</h1>
            ) : (
               <>
                  <h1 className={st.title}>Cart</h1>
                  <div className={st.products}>
                     {products.map(({ name, id, price, count, img }) => {
                        return (
                           <CartProduct
                              price={price}
                              name={name}
                              count={count}
                              img={img}
                              id={id}
                              key={id}
                              decreaseProductCount={decreaseProductCount}
                              increaseProductCount={increaseProductCount}
                              deleteProductFromCart={deleteProductFromCart}
                           />
                        )
                     })}
                  </div>
                  <div className={st.totalPrice}>
                     Total price is: <span>{totalPrice} $</span>
                  </div>
                  <MakeOrder clearCart={clearCart} />
               </>
            )}
         </div>
      </div>
   )
}

export default CartPage
