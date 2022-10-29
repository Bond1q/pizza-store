import React, { FC, useState } from 'react'
import { Product } from '../../../utils/types/products'
import Modal from '../../Modal/Modal'
import st from './ProductModal.module.scss'
interface ProductModalProps extends Omit<Product, 'id'> {
	onAdd: () => void
	setIsProductModalActive: (isActive: boolean) => void
	isProductModalActive: boolean
	options: Array<{ price: number, text: string }>
}

const ProductModal: FC<ProductModalProps> = ({
	name,
	ingradients,
	price,
	img,
	onAdd,
	options,
	setIsProductModalActive,
	isProductModalActive,
}) => {
	// const [isModalActive, setIsModalActive] = useState(true)
	return (
		<Modal isModalActive={isProductModalActive} setIsModalActive={setIsProductModalActive}>
			<div className={st.productModal}>
				<div className={st.main}>
					<img src={img} alt='' />
					<div className={st.info}>
						<h4 className={st.name}>{name}</h4>
						<p className={st.ingradients}>{ingradients?.join(', ')}</p>
						<div className={st.typeSelection}>
							{options.map((el, index) => {
								return <label key={index}>

									<input checked name='aaa' type="radio" />
									<span className={st.checkmark}></span>
									<span className={st.optionText}>{el.text}</span>
									<span className={st.optionPrice}>{el.price}</span>
								</label>
							})}
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default ProductModal
