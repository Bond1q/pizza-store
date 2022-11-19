import React, { useEffect, FC } from 'react'

import Loader from '../../Components/Loader/Loader'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import PageContainer from '../../Components/PageContainer/PageContainer'
import { ProductsTypes, Product } from '../../utils/types/products'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

const DrinksPage: FC = () => {
   const { products, isLoading } = useAppSelector((state) => state.products)
   const { getProducts, addProductToCart } = useAppDispatch()

   const onAddHandler = (product: Product, count: number) => {
      addProductToCart({ product, count })
   }

   useEffect(() => {
      getProducts(ProductsTypes.DRINKS)
   }, [getProducts])

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : (
            <PageContainer title='Drinks'>
               {products.map((product) => {
                  const [text, price] = Object.entries(product.price[0])[0]
                  return (
                     <ProductCard
                        onAdd={onAddHandler}
                        img={product.img}
                        price={price}
                        ingradients={product.ingradients}
                        name={product.name + ' ' + text}
                        id={product.id}
                        key={product.id}
                     />
                  )
               })}
            </PageContainer>
         )}
      </>
   )
}

export default DrinksPage
