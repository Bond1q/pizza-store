import React, { FC } from 'react'
import cn from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Product } from '../../../utils/types/products'
import st from './ProductCard.module.scss'

interface ProductCardProps extends Product {
   onAdd: (product: Product, count: number) => void
}

const ProductCard: FC<ProductCardProps> = React.memo(
   ({ img, name, ingradients, price, id, onAdd }) => {
      const ingradientsList = ingradients?.map((ingradient, index) => (
         <li key={index}>
            {ingradient}
            {index !== ingradients?.length - 1 && ','}
         </li>
      ))

      const product: Product = {
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
               <button className={st.addProduct} onClick={() => onAdd(product, 1)}>
                  +Add
               </button>
            </div>
         </div>
      )
   },
)

export default ProductCard
