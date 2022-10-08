import React, { FC, useEffect } from 'react'

import PageContainer from './../../Components/PageContainer/PageContainer'
import Loader from '../../Components/Loader/Loader'
import { ProductsTypes } from '../../utils/types/products'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

const PizzasPage: FC = () => {
   const { isLoading, products } = useAppSelector((state) => state.products)
   const { getProducts } = useAppDispatch()

   useEffect(() => {
      getProducts(ProductsTypes.PIZZAS)
   }, [getProducts])

   return <>{isLoading ? <Loader /> : <PageContainer title='Pizzas' products={products} />}</>
}

export default PizzasPage
