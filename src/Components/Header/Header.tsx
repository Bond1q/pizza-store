import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { useTypedSelector } from './../../utils/hooks/useTypedSelector'

import logo from '../../assets/imgs/logo.png'
import cartLogo from '../../assets/imgs/carLogo.png'
import st from '../Header/Header.module.scss'

const Header: FC = () => {
   const { totalPrice, productsCount } = useTypedSelector((state) => state.cartReducer)
   const [menuActive, setMenuActive] = React.useState(false)
   const hideMenu = () => {
      if (menuActive) {
         setMenuActive(false)
      }
   }
   return (
      <header className={st.header}>
         <div className={cn(st.adaptiveLines)}>
            <div
               onClick={() => setMenuActive(!menuActive)}
               className={cn(st.lines, { [st.linesAnimation]: menuActive })}
            >
               <span></span>
               <span></span>
            </div>

            <div className={cn(st.storeName)}>
               <img src={logo} alt='pizza' />
               <div className={cn(st.name)}>PIZZA STORE</div>
            </div>
            <NavLink
               onClick={() => setMenuActive(false)}
               to='/cart'
               className={cn(st.adaptiveCart)}
            >
               <div className={cn(st.cartLogo)}>
                  <img src={cartLogo} alt='cart' />
                  <div className={st.productsCount}>{productsCount}</div>
               </div>
            </NavLink>
         </div>

         <div
            onClick={hideMenu}
            className={cn(st.container, st.grid, { [st.containerActive]: menuActive })}
         >
            <div className={cn(st.storeName)}>
               <img src={logo} alt='pizza' />
               <div className={cn(st.name)}>PIZZA STORE</div>
            </div>
            <div className={cn(st.menu)}>
               <NavLink
                  style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400 })}
                  to='/pizzas'
               >
                  Pizzas
               </NavLink>
               <NavLink
                  style={({ isActive }) => ({ fontWeight: isActive ? 500 : 400 })}
                  to='/drinks'
               >
                  Drinks
               </NavLink>
            </div>
            <NavLink to='/cart' className={cn(st.cart)}>
               <div className={st.flexContainer}>
                  <div className={cn(st.cost)}>{totalPrice} $</div>
                  <span></span>

                  <div className={cn(st.cartLogo)}>
                     <img src={cartLogo} alt='cart' />
                     <div className={st.productsCount}>{productsCount}</div>
                  </div>
               </div>
            </NavLink>
         </div>
      </header>
   )
}

export default Header
