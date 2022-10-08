import React, { useEffect, FC } from 'react'

import Loader from '../../Components/Loader/Loader'
import PageContainer from '../../Components/PageContainer/PageContainer'
import { ProductsTypes } from '../../utils/types/products'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

const DrinksPage: FC = () => {
   const { products, isLoading } = useAppSelector((state) => state.products)
   const { getProducts } = useAppDispatch()
   useEffect(() => {
      getProducts(ProductsTypes.DRINKS)
   }, [getProducts])

   return <>{isLoading ? <Loader /> : <PageContainer title='Drinks' products={products} />}</>
}

export default DrinksPage
