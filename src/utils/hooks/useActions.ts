import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ProductsActionCreators from '../../redux/actionCreators/productsAction'
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ProductsActionCreators, dispatch)
}