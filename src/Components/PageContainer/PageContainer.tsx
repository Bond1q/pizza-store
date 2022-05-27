import cn from 'classnames';
import React, { FC } from 'react';
import image from '../../imgs/Diablo.jpg'
import { Product as ProductTypes } from '../../types/products';
import Product from '../Product/Product';
import st from './PageContainer.module.scss'
interface PageContainerProps {
	title: string;
	products: ProductTypes[];

}

const PageContainer: FC<PageContainerProps> = ({ title, products }) => {

	// const test = [
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	// { img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
	// 	{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },


	// ]
	return (
		<div className={st.pageContainer}>
			<h1 className={st.title}>Pizzas</h1>
			<div className={cn(st.products, st.grid)}>
				{products.map((product) => {
					return <Product img={product.img}
						price={product.price}
						ingradients={product.ingradients}
						name={product.name}
						id={product.id}
						key={product.id}
					/>
				}
				)}
			</div>
		</div>
	);
};

export default PageContainer;