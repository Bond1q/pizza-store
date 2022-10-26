import React, { FC } from 'react'
import cn from 'classnames'

import { Product as ProductTypes } from '../../utils/types/products'
import Product from '../Product/ProductCard/ProductCard'

import st from './PageContainer.module.scss'
interface PageContainerProps {
	title: string
	products: ProductTypes[]
}

const PageContainer: FC<PageContainerProps> = ({ title, products }) => {
	return (
		<div className={st.pageContainer}>
			<div className={st.container}>
				<h1 className={st.title}>{title}</h1>
				<div className={cn(st.products, st.grid)}>
					{products.map((product) => {
						return (
							<Product
								img={product.img}
								price={product.price}
								ingradients={product.ingradients}
								name={product.name}
								id={product.id}
								key={product.id}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default PageContainer
