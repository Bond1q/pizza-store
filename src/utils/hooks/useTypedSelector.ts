import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { ReduxState } from '../../store'

export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector
