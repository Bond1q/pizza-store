import React, { FC, useEffect } from 'react';
import Loader from '../../Components/Loader/Loader';
import { GetProductsTypes } from '../../types/products';
import { useActions } from '../../utils/hooks/useActions';
import PageContainer from './../../Components/PageContainer/PageContainer';
import { useTypedSelector } from './../../utils/hooks/useTypedSelector';

const PizzasPage: FC = () => {
	const { isLoading, products } = useTypedSelector(state => state.productsReducer)
	const { getProducts } = useActions()
	useEffect(() => {
		getProducts(GetProductsTypes.PIZZAS)
	}, [])
	return (
		<div>
			{
				isLoading ? <Loader /> :
					<PageContainer title='Pizzas' products={products} />

			}

		</div>
	);
};

export default PizzasPage;