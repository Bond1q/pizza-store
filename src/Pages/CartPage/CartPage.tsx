import React, { FC, FormEvent } from 'react';
import st from './CartPage.module.scss'
import { useTypedSelector } from './../../utils/hooks/useTypedSelector';
import { useActions } from './../../utils/hooks/useActions';
import CartProduct from '../../Components/CartProduct/CartProduct';
import MakeOrder from '../../Components/MakeOrder/MakeOrder';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetProductsTypes } from '../../types/products';
import Loader from '../../Components/Loader/Loader';


const CartPage: FC = () => {
	const { totalPrice, products } = useTypedSelector(state => state.cartReducer);
	const { products: productsList, isLoading } = useTypedSelector(state => state.productsReducer);
	const { deleteProductFromCart, getProducts, increaseProductCount, decreaseProductCount, clearCart, addProductToCart } = useActions()

	const baseUrl = useLocation()
	const navigate = useNavigate()



	React.useEffect(() => {
		if (products.length !== 0) {
			let newUrl = '/cart'
			if (products.length !== 0) {
				newUrl += '/'
				products.forEach(product => {
					newUrl += '+' + product.id + product.count
				})

			}
			navigate(newUrl, { replace: true })
			return;
		}

		if (products.length === 0 && baseUrl.pathname !== '/cart') {
			getProducts(GetProductsTypes.PIZZAS);
			const url = baseUrl.pathname.split('+')
			url.splice(0, 1);
			const parsedUrl = url.map(elem => {
				return { id: elem.slice(0, elem.length - 1), count: elem.at(-1) }
			})
			productsList.forEach(product => {
				const index = parsedUrl.findIndex((elem) => elem.id === product.id);
				if (index !== -1) {
					addProductToCart({ ...product }, (+parsedUrl[index].count!))
				}
			})

		}


	}, [productsList])


	return (
		<div className={st.cartPage}>
			<div className={st.container}>
				{isLoading ? <Loader /> : products?.length === 0 ? <h1 className={st.emptyCart}>Cart is empty!</h1> :
					<>
						<h1 className={st.title}>Cart</h1>
						<div className={st.products}>
							{products.map(({ name, id, price, count, img }) => {
								return <CartProduct
									price={price} name={name} count={count} img={img} id={id} key={id}
									decreaseProductCount={decreaseProductCount}
									increaseProductCount={increaseProductCount}
									deleteProductFromCart={deleteProductFromCart}
								/>
							}
							)}
						</div>
						<div className={st.totalPrice}>Total price is: <span>{totalPrice} $</span></div>
						<MakeOrder clearCart={clearCart} />
					</>}
			</div>
		</div>
	);
};

export default CartPage;