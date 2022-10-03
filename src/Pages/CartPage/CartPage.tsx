import React, { FC } from 'react'

import { useTypedSelector } from './../../utils/hooks/useTypedSelector'
import { useActions } from './../../utils/hooks/useActions'
import CartProduct from '../../Components/CartProduct/CartProduct'
import MakeOrder from '../../Components/MakeOrder/MakeOrder'

import st from './CartPage.module.scss'

const CartPage: FC = () => {
   const { totalPrice, products } = useTypedSelector((state) => state.cartReducer)
   const { deleteProductFromCart, increaseProductCount, decreaseProductCount, clearCart } =
      useActions()

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
