import React, { FC, useState } from 'react'
import cn from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Product } from '../../../utils/types/products'
import { AdditionProductToCart } from '../../../utils/types/cart'

import st from './ProductCard.module.scss'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import ProductModal from '../ProductModal/ProductModal'

interface ProductCardProps extends Product {
	shouldShowModal: boolean
}

const ProductCard: FC<ProductCardProps> = React.memo(
	({ img, name, ingradients, price, id, shouldShowModal }) => {
		const ingradientsList = ingradients?.map((ingradient, index) => (
			<li key={index}>
				{ingradient}
				{index !== ingradients?.length - 1 && ','}
			</li>
		))
		const { addProductToCart } = useAppDispatch()
		const [isModalActive, setIsModalActive] = useState(false)

		const product: Product = {
			img,
			name,
			ingradients,
			price,
			id,
		}

		const handleAddProduct = (product: Product, count: number) => {
			if (shouldShowModal) {
				setIsModalActive(true)
			} else {
				addProductToCart({ product, count })
			}
		}
		return (
			<div className={st.product}>
				<LazyLoadImage alt={'pizza'} height={200} src={img} width={280} effect='blur' />
				<h2 className={st.productName}>{name}</h2>
				<ul className={cn({ [st.ingradients]: ingradientsList?.length })}>{ingradientsList}</ul>
				<div className={st.flex}>
					<div className={st.price}>{price} $</div>
					<button className={st.addProduct} onClick={() => handleAddProduct(product, 1)}>
						+Add
					</button>
				</div>
				{/* {isModalActive && ( */}
				<ProductModal
					isProductModalActive={isModalActive}
					setIsProductModalActive={setIsModalActive}
					{...product}
					options={[{ text: '30 cm ', price: 10 }, { text: '50 cm ', price: 15 }]}
					onAdd={() => addProductToCart({ product, count: 1 })}
				/>
				{/* )} */}
			</div>
		)
	},
)

export default ProductCard
