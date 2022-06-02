import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ProductsActionCreators from '../../redux/actionCreators/productsAction'
import * as CartAtionCreators from '../../redux/actionCreators/cartAction'
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators({ ...ProductsActionCreators, ...CartAtionCreators }, dispatch)
}