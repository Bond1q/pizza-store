import cn from 'classnames';
import React, { FC } from 'react';
import image from '../../imgs/Diablo.jpg'
import Product from '../Product/Product';
import st from './PageContainer.module.scss'
interface PageContainerProps {

}

const PageContainer: FC = () => {

	const test = [
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		// { img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },
		{ img: image, name: 'Diablo', ingradients: ['tomato base', 'mozzarella', 'salami Picanto'], price: 9 },


	]
	return (
		<div className={st.pageContainer}>
			<h1 className={st.title}>Pizzas</h1>
			<div className={cn(st.products, st.grid)}>
				{test.map((pizza, index) => <Product img={pizza.img}
					price={pizza.price}
					ingradients={pizza.ingradients}
					name={pizza.name}
					key={index}
				/>)}
			</div>
		</div>
	);
};

export default PageContainer;