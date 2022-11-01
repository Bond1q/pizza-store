import React, { FC } from 'react'
import { Product } from '../../../utils/types/products'
import Modal from '../../Modal/Modal'
import st from './ProductModal.module.scss'
interface ProductModalProps extends Omit<Product, 'id' | 'price'> {
	onAdd: () => void
	setIsProductModalActive: (isActive: boolean) => void
	isProductModalActive: boolean
	options: Array<{ price: number; text: string }>
}

const ProductModal: FC<ProductModalProps> = ({
	name,
	ingradients,
	img,
	onAdd,
	options,
	setIsProductModalActive,
	isProductModalActive,
}) => {
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
								return (
									<label key={index}>
										<input checked name='aaa' type='radio' />
										<span className={st.checkmark}></span>
										<span className={st.optionText}>{el.text}</span>
										<span className={st.divider}>-</span>
										<span className={st.optionPrice}>{el.price}$</span>
									</label>
								)
							})}
						</div>
					</div>
				</div>
				<button onClick={() => { onAdd; setIsProductModalActive(false) }} className={st.addProduct}>
					+Add
				</button>
			</div>
		</Modal>
	)
}

export default ProductModal
