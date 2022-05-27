import React, { FC } from 'react';
import st from './Product.module.scss'
import cn from 'classnames'
import { Product as ProductProps } from '../../types/products';


const Product: FC<ProductProps> = ({ img, name, ingradients, price }) => {
	const ingradientsList = ingradients?.map((ingradient, index) => <li key={index} >{ingradient}{index != ingradients?.length - 1 && ','}</li>);

	return (
		<div className={st.product}>
			<img className={st.productImg} src={img} alt="product" />
			<h2 className={st.productName}>{name}</h2>
			<ul className={st.ingradients}>
				{ingradientsList}
			</ul>
			<div className={st.flex}>
				<div className={st.price}>{price} $</div>
				<button className={st.addProduct}>+Add</button>
			</div>
		</div>
	);
};

export default Product;