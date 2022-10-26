import React, { FC } from 'react'
import cn from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Product as ProductProps } from '../../../utils/types/products'

import st from './ProductCard.module.scss'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'

const ProductCard: FC<ProductProps> = React.memo(({ img, name, ingradients, price, id }) => {
   const ingradientsList = ingradients?.map((ingradient, index) => (
      <li key={index}>
         {ingradient}
         {index !== ingradients?.length - 1 && ','}
      </li>
   ))
   const { addProductToCart } = useAppDispatch()
   const product: ProductProps = {
      img,
      name,
      ingradients,
      price,
      id,
   }
   return (
      <div className={st.product}>
         <LazyLoadImage alt={'pizza'} height={200} src={img} width={280} effect='blur' />
         <h2 className={st.productName}>{name}</h2>
         <ul className={cn({ [st.ingradients]: ingradientsList?.length })}>{ingradientsList}</ul>
         <div className={st.flex}>
            <div className={st.price}>{price} $</div>
            <button
               className={st.addProduct}
               onClick={() => addProductToCart({ product, count: 1 })}
            >
               +Add
            </button>
         </div>
      </div>
   )
})

export default ProductCard
