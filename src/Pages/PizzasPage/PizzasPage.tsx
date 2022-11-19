import React, { FC, useEffect, useState } from 'react'

import PageContainer from './../../Components/PageContainer/PageContainer'
import Loader from '../../Components/Loader/Loader'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import { ProductsTypes, Product, ProductFromDB } from '../../utils/types/products'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'
import ProductModal from '../../Components/Product/ProductModal/ProductModal'

const PizzasPage: FC = () => {
   const { isLoading, products } = useAppSelector((state) => state.products)
   const { getProducts, addProductToCart } = useAppDispatch()

   const [isModalActive, setIsModalActive] = useState(false)
   const [productModalProps, setProductModalProps] = useState<ProductFromDB>({
      ingradients: [],
      img: '',
      id: '',
      name: '',
      price: [],
   })

   const onAddHandlerToPoductCard = (product: Product) => {
      setIsModalActive(true)
      setProductModalProps(products.filter((el) => el.id === product.id)[0])
   }

   const onAddHandlerToPoductModal = (text: string, price: number) => {
      setIsModalActive(false)
      const product: Product = {
         name: productModalProps.name + ' ' + text,
         price: price,
         img: productModalProps.img,
         id: productModalProps.id + parseFloat(text),
      }
      addProductToCart({ product, count: 1 })
   }

   useEffect(() => {
      getProducts(ProductsTypes.PIZZAS)
   }, [getProducts])

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : (
            <PageContainer title='Pizzas'>
               {products.map((product) => {
                  return (
                     <ProductCard
                        onAdd={onAddHandlerToPoductCard}
                        img={product.img}
                        price={product.price[0]['30 cm']}
                        ingradients={product.ingradients}
                        name={product.name}
                        id={product.id}
                        key={product.id}
                     />
                  )
               })}
            </PageContainer>
         )}
         <ProductModal
            onAdd={onAddHandlerToPoductModal}
            setIsProductModalActive={setIsModalActive}
            isProductModalActive={isModalActive}
            name={productModalProps.name}
            ingradients={productModalProps.ingradients}
            img={productModalProps.img}
            options={productModalProps.price.map((el) => {
               const [key, value] = Object.entries(el)[0]
               return { text: key, price: value }
            })}
         />
      </>
   )
}

export default PizzasPage
