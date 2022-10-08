import React, { FC } from 'react'

import { UnorderedProducts } from '../../utils/types/cart'
import { ChangeProductCountInCart, DeletionProductFromCart } from '../../utils/types/cart'
import st from './CartProduct.module.scss'
interface CartProductProps extends UnorderedProducts {
   decreaseProductCount(id: ChangeProductCountInCart): void
   increaseProductCount(id: ChangeProductCountInCart): void
   deleteProductFromCart(id: DeletionProductFromCart): void
}

const CartProduct: FC<CartProductProps> = React.memo(
   ({
      name,
      id,
      price,
      count,
      img,
      decreaseProductCount,
      increaseProductCount,
      deleteProductFromCart,
   }) => {
      return (
         <div className={st.product}>
            <div className={st.productView}>
               <img src={img} alt='product' />
               <div className={st.productName}>{name}</div>
            </div>
            <div className={st.counter}>
               <button onClick={() => decreaseProductCount({ id })} className={st.minus}>
                  <i className='fa-solid fa-minus'></i>
               </button>
               <div className={st.count}>{count}</div>
               <button onClick={() => increaseProductCount({ id })} className={st.plus}>
                  <i className='fa-solid fa-plus'></i>
               </button>
            </div>
            <div className={st.price}>{price * count} $</div>
            <div onClick={() => deleteProductFromCart({ id })} className={st.delete}>
               &#10006;
            </div>
         </div>
      )
   },
)
CartProduct.displayName = 'CartProduct'
export default CartProduct
