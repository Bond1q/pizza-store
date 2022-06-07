import React, { useEffect, FC } from 'react';
import Loader from '../../Components/Loader/Loader';
import PageContainer from '../../Components/PageContainer/PageContainer';
import { GetProductsTypes } from '../../types/products';
import { useActions } from '../../utils/hooks/useActions';
import { useTypedSelector } from './../../utils/hooks/useTypedSelector';

const DrinksPage: FC = () => {
	const { products, isLoading } = useTypedSelector((state) => state.productsReducer)
	const { getProducts } = useActions()
	useEffect(() => {
		getProducts(GetProductsTypes.DRINKS)
	}, [])

	return (
		<>
			{isLoading ? <Loader /> :
				<PageContainer title="Drinks" products={products} />
			}

		</>
	);
};

export default DrinksPage;