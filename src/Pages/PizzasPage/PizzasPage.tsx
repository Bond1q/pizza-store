import React, { FC, useEffect } from 'react';
import Loader from '../../Components/Loader/Loader';
import { GetProductsTypes } from '../../types/products';
import { useActions } from '../../utils/hooks/useActions';
import PageContainer from './../../Components/PageContainer/PageContainer';
import { useTypedSelector } from './../../utils/hooks/useTypedSelector';
import { addProductToCart } from './../../redux/actionCreators/cartAction';

const PizzasPage: FC = () => {
	const { isLoading, products } = useTypedSelector(state => state.productsReducer)
	const { getProducts } = useActions()
	useEffect(() => {
		getProducts(GetProductsTypes.PIZZAS)
	}, [])

	return (
		<>
			{
				isLoading ? <Loader /> :
					<PageContainer title='Pizzas' products={products} />

			}
		</>
	);
};

export default PizzasPage;