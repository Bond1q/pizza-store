import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxState } from "../../redux";

export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector