import React, { FC } from 'react'
import cn from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Product as ProductProps } from '../../types/products'
import { useActions } from './../../utils/hooks/useActions'

import st from './Product.module.scss'

const Product: FC<ProductProps> = React.memo(({ img, name, ingradients, price, id }) => {
   const ingradientsList = ingradients?.map((ingradient, index) => (
      <li key={index}>
         {ingradient}
         {index !== ingradients?.length - 1 && ','}
      </li>
   ))
   const { addProductToCart } = useActions()
   return (
      <div className={st.product}>
         <LazyLoadImage alt={'pizza'} height={200} src={img} width={280} effect='blur' />
         <h2 className={st.productName}>{name}</h2>
         <ul className={cn({ [st.ingradients]: ingradientsList?.length })}>{ingradientsList}</ul>
         <div className={st.flex}>
            <div className={st.price}>{price} $</div>
            <button
               className={st.addProduct}
               onClick={() => addProductToCart({ img, name, ingradients, price, id })}
            >
               +Add
            </button>
         </div>
      </div>
   )
})

export default Product
