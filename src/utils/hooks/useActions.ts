import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProductsActionCreators from '../../store/actionCreators/productsAction'
import * as CartAtionCreators from '../../store/actionCreators/cartAction'
import { useMemo } from 'react'
export const useActions = () => {
   const dispatch = useDispatch()

   return useMemo(
      () => bindActionCreators({ ...ProductsActionCreators, ...CartAtionCreators }, dispatch),
      [dispatch],
   )
}
