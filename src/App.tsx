import React from 'react'

import Header from './Components/Header/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import PizzasPage from './Pages/PizzasPage/PizzasPage'
import DrinksPage from './Pages/DrinksPage/DrinksPage'
import CartPage from './Pages/CartPage/CartPage'

const App = () => {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/pizzas' element={<PizzasPage />} />
            <Route path='/drinks' element={<DrinksPage />} />
            <Route path='/cart' element={<CartPage />} />

            <Route path='*' element={<Navigate to={'/pizzas'} />} />
         </Routes>
      </div>
   )
}

export default App
