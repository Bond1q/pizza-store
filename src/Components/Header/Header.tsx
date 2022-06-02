import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import cartLogo from '../../imgs/carLogo.png'
import st from '../Header/Header.module.scss'
import cn from 'classnames';
import { useTypedSelector } from './../../utils/hooks/useTypedSelector';

const Header: FC = () => {
	const { totalPrice, productsCount } = useTypedSelector(state => state.cartReducer)
	return (
		<header className={st.header}>
			<div className={cn(st.container, st.grid)}>
				<div className={cn(st.storeName)}>
					<img src={logo} alt="pizza" />
					<div className={cn(st.name)}>PIZZA STORE</div>
				</div>
				<div className={cn(st.menu)}>
					<NavLink
						style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400, })}
						to='/pizzas'>Pizzas</NavLink>
					<NavLink
						style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400, })}
						to='/drinks'>Drinks</NavLink>
				</div>
				<div className={cn(st.cart)}>
					<div className={st.flexContainer}>
						<div className={cn(st.cost)}>{totalPrice} $</div>
						<div className={cn(st.cartLogo)}>
							<img src={cartLogo} alt="cart" />
							<div className={st.productsCount}>{productsCount}</div>
						</div>
					</div>

				</div>
			</div>

		</header>

	);
};

export default Header;